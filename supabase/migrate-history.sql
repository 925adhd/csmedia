-- Content version history
-- Run this in your Supabase SQL editor

-- History table
create table if not exists content_history (
  id uuid default gen_random_uuid() primary key,
  page text not null,
  section text not null,
  content jsonb not null,
  changed_at timestamptz default now()
);

-- RLS
alter table content_history enable row level security;
create policy "Public read history" on content_history for select using (true);
create policy "Admin insert history" on content_history for insert to authenticated with check (true);
create policy "Admin delete history" on content_history for delete to authenticated using (true);

-- Auto-save history on every page_content update
create or replace function save_content_history()
returns trigger as $$
begin
  insert into content_history (page, section, content, changed_at)
  values (OLD.page, OLD.section, OLD.content, OLD.updated_at);
  -- Keep only last 20 versions per section
  delete from content_history
  where id in (
    select id from content_history
    where page = OLD.page and section = OLD.section
    order by changed_at desc
    offset 20
  );
  return new;
end;
$$ language plpgsql;

create or replace trigger page_content_history
  before update on page_content
  for each row execute function save_content_history();

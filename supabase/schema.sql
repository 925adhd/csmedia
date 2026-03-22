-- CS Media CMS Database Schema
-- Run this in your Supabase SQL editor

-- Portfolio Projects
create table if not exists portfolio_projects (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  property_type text not null default 'residential',
  location text not null default '',
  description text not null default '',
  hero_image text not null default '',
  images text[] default '{}',
  video_src text,
  mobile_video_src text,
  featured boolean default false,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Testimonials
create table if not exists testimonials (
  id uuid default gen_random_uuid() primary key,
  quote text not null,
  name text not null,
  badge text not null default 'Recommends CS MEDIA, LLC',
  service text not null default '',
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Services
create table if not exists services (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  icon_name text not null default 'camera',
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Page Content (hero text, about copy, stats, etc.)
create table if not exists page_content (
  id uuid default gen_random_uuid() primary key,
  page text not null,
  section text not null,
  content jsonb not null default '{}',
  updated_at timestamptz default now(),
  unique(page, section)
);

-- Content Version History (auto-saved on every page_content update)
create table if not exists content_history (
  id uuid default gen_random_uuid() primary key,
  page text not null,
  section text not null,
  content jsonb not null,
  changed_at timestamptz default now()
);

-- Auto-update updated_at timestamp
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create or replace trigger portfolio_projects_updated_at
  before update on portfolio_projects
  for each row execute function update_updated_at();

create or replace trigger testimonials_updated_at
  before update on testimonials
  for each row execute function update_updated_at();

create or replace trigger services_updated_at
  before update on services
  for each row execute function update_updated_at();

create or replace trigger page_content_updated_at
  before update on page_content
  for each row execute function update_updated_at();

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

-- Row Level Security
alter table portfolio_projects enable row level security;
alter table testimonials enable row level security;
alter table services enable row level security;
alter table page_content enable row level security;
alter table content_history enable row level security;

-- Public read access (anyone can view the site)
create policy "Public read portfolio" on portfolio_projects for select using (true);
create policy "Public read testimonials" on testimonials for select using (true);
create policy "Public read services" on services for select using (true);
create policy "Public read page_content" on page_content for select using (true);

-- Authenticated users can do everything (admin)
create policy "Admin insert portfolio" on portfolio_projects for insert to authenticated with check (true);
create policy "Admin update portfolio" on portfolio_projects for update to authenticated using (true);
create policy "Admin delete portfolio" on portfolio_projects for delete to authenticated using (true);

create policy "Admin insert testimonials" on testimonials for insert to authenticated with check (true);
create policy "Admin update testimonials" on testimonials for update to authenticated using (true);
create policy "Admin delete testimonials" on testimonials for delete to authenticated using (true);

create policy "Admin insert services" on services for insert to authenticated with check (true);
create policy "Admin update services" on services for update to authenticated using (true);
create policy "Admin delete services" on services for delete to authenticated using (true);

create policy "Admin insert page_content" on page_content for insert to authenticated with check (true);
create policy "Admin update page_content" on page_content for update to authenticated using (true);
create policy "Admin delete page_content" on page_content for delete to authenticated using (true);

create policy "Public read history" on content_history for select using (true);
create policy "Admin insert history" on content_history for insert to authenticated with check (true);
create policy "Admin delete history" on content_history for delete to authenticated using (true);

-- Storage bucket for media uploads
insert into storage.buckets (id, name, public) values ('media', 'media', true)
on conflict (id) do nothing;

-- Storage policies
create policy "Public read media" on storage.objects for select using (bucket_id = 'media');
create policy "Admin upload media" on storage.objects for insert to authenticated with check (bucket_id = 'media');
create policy "Admin update media" on storage.objects for update to authenticated using (bucket_id = 'media');
create policy "Admin delete media" on storage.objects for delete to authenticated using (bucket_id = 'media');

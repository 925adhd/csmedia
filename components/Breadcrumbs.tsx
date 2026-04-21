import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-dark-900 border-b border-dark-500/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-dark-300 font-mono tracking-wide">
          {items.map((c, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                {!isLast && c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-gold transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-dark-100">
                    {c.label}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden="true" className="text-dark-500">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

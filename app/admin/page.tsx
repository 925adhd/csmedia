import AdminShell from "@/components/admin/AdminShell";
import ChangePassword from "@/components/admin/ChangePassword";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [
    { count: projectCount },
    { count: testimonialCount },
    { count: serviceCount },
  ] = await Promise.all([
    supabase.from("portfolio_projects").select("*", { count: "exact", head: true }),
    supabase.from("testimonials").select("*", { count: "exact", head: true }),
    supabase.from("services").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    { label: "Portfolio Projects", count: projectCount || 0, href: "/admin/portfolio" },
    { label: "Testimonials", count: testimonialCount || 0, href: "/admin/testimonials" },
    { label: "Services", count: serviceCount || 0, href: "/admin/services" },
  ];

  return (
    <AdminShell>
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <a
            key={stat.label}
            href={stat.href}
            className="rounded-xl bg-dark-800 border border-dark-500/30 p-6 hover:border-gold/20 transition-colors"
          >
            <p className="text-3xl font-bold text-gold">{stat.count}</p>
            <p className="text-sm text-dark-200 mt-1">{stat.label}</p>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <ChangePassword />
      </div>
    </AdminShell>
  );
}

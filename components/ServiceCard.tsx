import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, href = "/services" }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <div className="group relative rounded-2xl bg-dark-700 p-8 transition-all duration-300 hover:bg-dark-600 border-gradient overflow-hidden h-full">
        {/* Subtle gold glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,110,0.08),transparent_70%)]" />

        <div className="relative z-10">
          <div className="mb-5 text-gold">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-dark-200">{description}</p>
        </div>
      </div>
    </Link>
  );
}

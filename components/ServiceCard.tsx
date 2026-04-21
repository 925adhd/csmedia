import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  icon?: React.ReactNode;
  image?: string;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon, image, title, description, href = "/services" }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full group">
      <div className="relative rounded-xl bg-dark-700 border border-dark-500/40 hover:border-gold/30 transition-colors overflow-hidden h-full flex flex-col">
        {image ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-dark-900">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-700/70 via-dark-700/10 to-transparent" />
          </div>
        ) : null}

        <div className="p-6 flex-1 flex flex-col">
          {icon && !image ? <div className="mb-5 text-gold">{icon}</div> : null}
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-dark-100">{description}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.25em] text-gold/70 group-hover:text-gold transition-colors">
            Learn more
            <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

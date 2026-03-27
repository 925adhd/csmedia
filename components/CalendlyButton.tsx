import Link from "next/link";

interface CalendlyButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function CalendlyButton({ className, children, onClick }: CalendlyButtonProps) {
  return (
    <Link href="/contact" className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

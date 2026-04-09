import Link from "next/link";

interface BookingButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function BookingButton({ className, children, onClick }: BookingButtonProps) {
  return (
    <Link href="/contact" className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

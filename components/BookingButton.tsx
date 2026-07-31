const BOOKING_URL = "https://csmediallc.square.site";

interface BookingButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  /** Deep link to a specific Square service, overriding the general booking page. */
  href?: string;
}

export default function BookingButton({ className, children, onClick, href = BOOKING_URL }: BookingButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      {children}
    </a>
  );
}

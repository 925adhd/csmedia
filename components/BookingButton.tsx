const BOOKING_URL = "https://cscreatesmediallc.fotello.co/book?entry_source=website";

interface BookingButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  /** Deep link to a specific booking service, overriding the general booking page. */
  href?: string;
}

export default function BookingButton({ className, children, onClick, href = BOOKING_URL }: BookingButtonProps) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

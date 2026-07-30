const BOOKING_URL = "https://www.bookcsmedia.com/s/appointments";

interface BookingButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function BookingButton({ className, children, onClick }: BookingButtonProps) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      {children}
    </a>
  );
}

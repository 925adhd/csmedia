import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a drone photography or video shoot. Get in touch for a quote and availability.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

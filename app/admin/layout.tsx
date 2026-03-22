import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | CS Media",
  robots: { index: false, follow: false },
};

// Admin pages should never be pre-rendered
export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

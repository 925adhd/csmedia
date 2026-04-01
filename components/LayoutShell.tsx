"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieNotice from "@/components/CookieNotice";
import FloatingTextButton from "@/components/FloatingTextButton";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <>
        {children}
      </>
    );
  }

  return (
    <>
      <GoogleAnalytics />
      <Navbar />
      <main id="main-content" className="flex-1 pt-16">{children}</main>
      <Footer />
      <CookieNotice />
      <FloatingTextButton />
    </>
  );
}

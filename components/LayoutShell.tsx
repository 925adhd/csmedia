"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingTextButton from "@/components/FloatingTextButton";
import CookieNotice from "@/components/CookieNotice";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hidesFloatingText = pathname === "/services";

  return (
    <>
      <GoogleAnalytics />
      <Navbar />
      <main id="main-content" className="flex-1 pt-20">{children}</main>
      <Footer />
      {!hidesFloatingText && <FloatingTextButton />}
      <CookieNotice />
    </>
  );
}

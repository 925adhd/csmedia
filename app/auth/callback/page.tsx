"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    // Supabase client auto-reads the hash fragment and exchanges it for a session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push("/admin/setup");
      } else {
        // Wait for the token exchange
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
          if (session) {
            router.push("/admin/setup");
          }
        });
        setTimeout(() => {
          // Fallback after 3s
          router.push("/admin/login");
        }, 3000);
        return () => subscription.unsubscribe();
      }
    });
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900">
      <div className="text-center">
        <svg className="animate-spin h-6 w-6 text-gold mx-auto mb-3" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="text-dark-300 text-sm">Setting up your account...</p>
      </div>
    </div>
  );
}

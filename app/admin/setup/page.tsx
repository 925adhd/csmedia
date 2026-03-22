"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function SetupPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const [done, setDone] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Supabase puts the token in the URL hash after invite redirect
    // The client library auto-picks it up and creates a session
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setReady(true);
      } else {
        // Listen for auth state change (token exchange happens async)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
          if (session) {
            setReady(true);
          }
        });
        // Give it a moment, then show anyway
        setTimeout(() => setReady(true), 2000);
        return () => subscription.unsubscribe();
      }
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setDone(true);
      setTimeout(() => {
        router.push("/admin");
        router.refresh();
      }, 1500);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">Set Your Password</h1>
          <p className="text-sm text-dark-300 mt-1">
            {done
              ? "You're all set! Redirecting to admin..."
              : "Create a password to access the admin panel"}
          </p>
        </div>

        {done ? (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 mb-3">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-400 text-sm font-medium">Password set successfully!</p>
          </div>
        ) : !ready ? (
          <div className="text-center py-8">
            <svg className="animate-spin h-6 w-6 text-gold mx-auto mb-3" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-dark-300 text-sm">Setting up your account...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
                New Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-4 py-3 text-sm text-white placeholder-dark-300 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 outline-none transition-colors"
                placeholder="Min 6 characters"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                className="w-full rounded-lg bg-dark-700 border border-dark-500 px-4 py-3 text-sm text-white placeholder-dark-300 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 outline-none transition-colors"
                placeholder="Confirm password"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gold/10 border border-gold/20 px-4 py-3 text-sm font-semibold uppercase tracking-widest text-gold transition-all hover:bg-gold/20 disabled:opacity-50"
            >
              {loading ? "Setting Password..." : "Set Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

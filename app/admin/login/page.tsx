"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">CS Media Admin</h1>
          <p className="text-sm text-dark-300 mt-1">Sign in to manage your site</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg bg-dark-700 border border-dark-500 px-4 py-3 text-sm text-white placeholder-dark-300 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 outline-none transition-colors"
              placeholder="admin@csmedia.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-gold uppercase tracking-[0.2em] mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg bg-dark-700 border border-dark-500 px-4 py-3 text-sm text-white placeholder-dark-300 focus:border-gold/50 focus:ring-1 focus:ring-gold/30 outline-none transition-colors"
              placeholder="Your password"
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
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

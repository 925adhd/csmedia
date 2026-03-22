"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ChangePassword() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setMessage("Passwords don't match.");
      return;
    }

    setSaving(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Password updated!");
      setPassword("");
      setConfirm("");
      setTimeout(() => { setOpen(false); setMessage(""); }, 2000);
    }
    setSaving(false);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-sm text-dark-300 hover:text-gold transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
        Change Password
      </button>
    );
  }

  return (
    <div className="rounded-xl bg-dark-800 border border-dark-500/30 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white">Change Password</h3>
        <button onClick={() => { setOpen(false); setMessage(""); }} className="text-xs text-dark-300 hover:text-white">
          Cancel
        </button>
      </div>

      {message && (
        <div className={`mb-3 p-2 rounded text-xs ${message.startsWith("Error") ? "bg-red-500/10 text-red-400" : message === "Password updated!" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-xs text-dark-300 mb-1">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2 text-sm text-white focus:border-gold/50 outline-none"
            placeholder="Min 6 characters"
          />
        </div>
        <div>
          <label className="block text-xs text-dark-300 mb-1">Confirm Password</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full rounded-lg bg-dark-700 border border-dark-500 px-3 py-2 text-sm text-white focus:border-gold/50 outline-none"
            placeholder="Confirm new password"
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-gold/10 border border-gold/20 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold/20 transition-colors disabled:opacity-50"
        >
          {saving ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEditMode } from "./EditModeContext";
import { createClient } from "@/lib/supabase/client";

export default function EditToggle() {
  const { isAdmin, editMode, setEditMode, saving } = useEditMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  if (!isAdmin) return null;

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setMenuOpen(false);
    router.refresh();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      {/* Menu */}
      {menuOpen && !editMode && (
        <div className="bg-dark-700 border border-dark-500/50 rounded-xl shadow-xl overflow-hidden mb-1">
          <button
            onClick={() => { setEditMode(true); setMenuOpen(false); }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-white hover:bg-dark-600 transition-colors"
          >
            <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
            </svg>
            Edit Page
          </button>
          <button
            onClick={() => { setMenuOpen(false); router.push("/admin"); }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-white hover:bg-dark-600 transition-colors"
          >
            <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            Admin Panel
          </button>
          <div className="h-px bg-dark-500/30" />
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-400 hover:bg-dark-600 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            Sign Out
          </button>
        </div>
      )}

      {/* Main button */}
      {editMode ? (
        <button
          onClick={() => { setEditMode(false); router.refresh(); }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg text-sm font-medium bg-gold text-dark-900 hover:bg-gold-light transition-all duration-200"
        >
          {saving && (
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Done Editing
        </button>
      ) : (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg text-sm font-medium bg-dark-700 text-white border border-dark-500/50 hover:border-gold/30 transition-all duration-200"
        >
          <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Admin
        </button>
      )}
    </div>
  );
}

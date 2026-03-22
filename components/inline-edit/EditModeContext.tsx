"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { createClient } from "@/lib/supabase/client";

interface EditModeContextType {
  isAdmin: boolean;
  editMode: boolean;
  setEditMode: (v: boolean) => void;
  saving: boolean;
  updateContent: (page: string, section: string, field: string, value: unknown) => Promise<void>;
}

const EditModeContext = createContext<EditModeContextType>({
  isAdmin: false,
  editMode: false,
  setEditMode: () => {},
  saving: false,
  updateContent: async () => {},
});

export function useEditMode() {
  return useContext(EditModeContext);
}

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdmin(!!session?.user);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session?.user);
      if (!session?.user) setEditMode(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  const updateContent = async (page: string, section: string, field: string, value: unknown) => {
    setSaving(true);
    try {
      const supabase = createClient();
      // Fetch current content
      const { data } = await supabase
        .from("page_content")
        .select("content")
        .eq("page", page)
        .eq("section", section)
        .single();

      const current = data?.content || {};

      // Handle nested field paths like "packages.0.price"
      if (field.includes(".")) {
        const parts = field.split(".");
        let obj = current;
        for (let i = 0; i < parts.length - 1; i++) {
          const key = parts[i];
          const idx = Number(key);
          obj = isNaN(idx) ? obj[key] : obj[idx];
        }
        const lastKey = parts[parts.length - 1];
        const lastIdx = Number(lastKey);
        if (isNaN(lastIdx)) {
          obj[lastKey] = value;
        } else {
          obj[lastIdx] = value;
        }
      } else {
        current[field] = value;
      }

      await supabase
        .from("page_content")
        .update({ content: current })
        .eq("page", page)
        .eq("section", section);
    } finally {
      setSaving(false);
    }
  };

  return (
    <EditModeContext.Provider value={{ isAdmin, editMode, setEditMode, saving, updateContent }}>
      {children}
    </EditModeContext.Provider>
  );
}

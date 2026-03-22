"use client";

import { useState, type ReactNode } from "react";
import { useEditMode } from "./EditModeContext";

interface EditableListProps {
  page: string;
  section: string;
  field: string;
  items: string[];
  children: ReactNode;
}

export default function EditableList({
  page,
  section,
  field,
  items,
  children,
}: EditableListProps) {
  const { editMode, updateContent } = useEditMode();
  const [editing, setEditing] = useState(false);
  const [list, setList] = useState(items);
  const [saving, setSaving] = useState(false);

  if (!editMode) {
    return <>{children}</>;
  }

  if (!editing) {
    return (
      <div
        onClick={() => setEditing(true)}
        className="cursor-pointer relative group/edit"
        title="Click to edit list"
      >
        {children}
        <span className="absolute -inset-1 rounded border border-dashed border-gold/40 opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-none" />
        <span className="absolute -top-2 -right-2 opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-none">
          <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
          </svg>
        </span>
      </div>
    );
  }

  const handleSave = async () => {
    setSaving(true);
    await updateContent(page, section, field, list);
    setSaving(false);
    setEditing(false);
  };

  const updateItem = (index: number, value: string) => {
    const updated = [...list];
    updated[index] = value;
    setList(updated);
  };

  const removeItem = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };

  const addItem = () => {
    setList([...list, ""]);
  };

  return (
    <div className="bg-dark-900/90 border border-gold/50 rounded-lg p-3 space-y-2">
      {list.map((item, i) => (
        <div key={i} className="flex gap-2">
          <input
            type="text"
            value={item}
            onChange={(e) => updateItem(i, e.target.value)}
            className="flex-1 bg-dark-800 border border-dark-500/50 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-gold/50"
          />
          <button
            onClick={() => removeItem(i)}
            className="text-red-400 hover:text-red-300 text-xs px-1"
          >
            &times;
          </button>
        </div>
      ))}
      <div className="flex gap-2 pt-1">
        <button
          onClick={addItem}
          className="text-xs text-gold hover:text-gold-light"
        >
          + Add Item
        </button>
        <div className="flex-1" />
        <button
          onClick={() => { setList(items); setEditing(false); }}
          className="text-xs text-dark-300 hover:text-white"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          className="text-xs bg-gold text-dark-900 px-3 py-1 rounded font-medium hover:bg-gold-light disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { useEditMode } from "./EditModeContext";

interface EditableTextProps {
  page: string;
  section: string;
  field: string;
  value: string;
  children: ReactNode;
  multiline?: boolean;
  className?: string;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3";
}

export default function EditableText({
  page,
  section,
  field,
  value,
  children,
  multiline = false,
  className = "",
  as: Tag = "span",
}: EditableTextProps) {
  const { editMode, updateContent } = useEditMode();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);
  const [saving, setSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  if (!editMode) {
    return <>{children}</>;
  }

  if (editing) {
    const handleSave = async () => {
      if (text !== value) {
        setSaving(true);
        await updateContent(page, section, field, text);
        setSaving(false);
      }
      setEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !multiline) {
        e.preventDefault();
        handleSave();
      }
      if (e.key === "Escape") {
        setText(value);
        setEditing(false);
      }
    };

    const sharedClass =
      "w-full bg-dark-900/90 border border-gold/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30";

    return (
      <Tag className={`relative inline-block w-full ${className}`}>
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            rows={4}
            className={`${sharedClass} resize-y text-sm`}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className={`${sharedClass} text-inherit`}
            style={{ fontSize: "inherit", fontWeight: "inherit" }}
          />
        )}
        {saving && (
          <span className="absolute top-1 right-1 text-gold text-xs">Saving...</span>
        )}
      </Tag>
    );
  }

  return (
    <Tag
      onClick={() => setEditing(true)}
      className={`cursor-pointer relative group/edit ${className}`}
      title="Click to edit"
    >
      {children}
      <span className="absolute -inset-1 rounded border border-dashed border-gold/40 opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-none" />
      <span className="absolute -top-2 -right-2 opacity-0 group-hover/edit:opacity-100 transition-opacity pointer-events-none">
        <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
        </svg>
      </span>
    </Tag>
  );
}

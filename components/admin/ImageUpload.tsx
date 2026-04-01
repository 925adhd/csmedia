"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const MAX_SIZE_MB = 5;

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
}

export default function ImageUpload({ value, onChange, folder = "portfolio" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");

    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`Image must be under ${MAX_SIZE_MB}MB. This file is ${(file.size / 1024 / 1024).toFixed(1)}MB.`);
      return;
    }

    setUploading(true);
    const supabase = createClient();

    const ext = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(fileName, file);

    if (uploadError) {
      setError(`Upload failed: ${uploadError.message}`);
    } else {
      const { data: { publicUrl } } = supabase.storage
        .from("media")
        .getPublicUrl(fileName);
      onChange(publicUrl);
    }

    setUploading(false);
  }

  return (
    <div className="space-y-2">
      {value && (
        <div className="relative aspect-[16/10] w-full max-w-sm rounded-lg overflow-hidden bg-dark-700">
          <img src={value} alt="Upload preview" className="w-full h-full object-cover" />
        </div>
      )}
      <label className="inline-block">
        <span className="inline-flex items-center gap-2 rounded-lg bg-dark-700 border border-dark-500 px-4 py-2 text-xs text-dark-200 hover:border-gold/30 transition-colors cursor-pointer">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          {uploading ? "Uploading..." : value ? "Replace" : "Upload"}
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="hidden"
        />
      </label>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

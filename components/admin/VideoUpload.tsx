"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface VideoUploadProps {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
}

export default function VideoUpload({ value, onChange, folder = "videos" }: VideoUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState("");

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setProgress(`Uploading ${(file.size / 1024 / 1024).toFixed(1)} MB...`);

    const supabase = createClient();
    const ext = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

    const { error } = await supabase.storage
      .from("media")
      .upload(fileName, file);

    if (!error) {
      const { data: { publicUrl } } = supabase.storage
        .from("media")
        .getPublicUrl(fileName);
      onChange(publicUrl);
    }

    setUploading(false);
    setProgress("");
  }

  function handleClear() {
    onChange("");
  }

  return (
    <div className="space-y-2">
      {value && (
        <div className="relative rounded-lg overflow-hidden bg-dark-700 border border-dark-500/30">
          <video
            src={value}
            controls
            className="w-full max-h-48 object-contain bg-black"
          />
          <button
            onClick={handleClear}
            className="absolute top-2 right-2 rounded-full bg-dark-900/80 p-1 text-red-400 hover:text-red-300 transition-colors"
            title="Remove video"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      <label className="block cursor-pointer">
        <span className="inline-flex items-center gap-2 rounded-lg bg-dark-700 border border-dark-500 px-4 py-2 text-xs text-dark-200 hover:border-gold/30 transition-colors">
          {uploading ? progress || "Uploading..." : value ? "Change Video" : "Upload Video"}
        </span>
        <input
          type="file"
          accept="video/*"
          onChange={handleUpload}
          disabled={uploading}
          className="hidden"
        />
      </label>
    </div>
  );
}

"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
}

export default function ImageUpload({ value, onChange, folder = "portfolio" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
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
  }

  return (
    <div className="space-y-2">
      {value && (
        <div className="relative w-full h-32 rounded-lg overflow-hidden bg-dark-700">
          <Image src={value} alt="Upload preview" fill className="object-cover" sizes="300px" />
        </div>
      )}
      <label className="block cursor-pointer">
        <span className="inline-flex items-center gap-2 rounded-lg bg-dark-700 border border-dark-500 px-4 py-2 text-xs text-dark-200 hover:border-gold/30 transition-colors">
          {uploading ? "Uploading..." : value ? "Change Image" : "Upload Image"}
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="hidden"
        />
      </label>
    </div>
  );
}

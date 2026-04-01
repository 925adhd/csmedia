"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";

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
      {error && <p className="text-xs text-red-400">{error}</p>}
      <p className="text-[10px] text-dark-400">Max {MAX_SIZE_MB}MB</p>
    </div>
  );
}

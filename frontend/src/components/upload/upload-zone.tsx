"use client";

import { useRef } from "react";
import { FileUp } from "lucide-react";

interface UploadZoneProps {
  onUpload(file: File): void;
}

export default function UploadZone({
  onUpload,
}: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    onUpload(file);
  }

  return (
    <div className="rounded-3xl border-2 border-dashed bg-white p-12 text-center">
      <FileUp className="mx-auto mb-6 h-12 w-12 text-indigo-600" />

      <h2 className="text-2xl font-semibold">
        Upload Research Papers
      </h2>

      <p className="mt-3 text-zinc-500">
        Upload a PDF to start your research workspace.
      </p>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".pdf"
        onChange={handleChange}
      />

      <button
        onClick={() => inputRef.current?.click()}
        className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-white"
      >
        Browse PDFs
      </button>
    </div>
  );
}
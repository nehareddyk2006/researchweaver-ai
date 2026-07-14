"use client";

import { Brain } from "lucide-react";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[420px] rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-violet-100">
          <Brain className="h-8 w-8 text-violet-600" />
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold">
          🧠 Building Research Intelligence
        </h2>

        <p className="mt-3 text-center text-zinc-500">
          Reading your paper and generating AI insights...
        </p>

        <div className="mt-8 space-y-3 text-sm text-zinc-700">
          <p>📄 Extracting text...</p>
          <p>🔍 Understanding research...</p>
          <p>✨ Generating summary...</p>
          <p>📊 Finding datasets & models...</p>
        </div>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-zinc-200">
          <div className="h-full w-full animate-pulse rounded-full bg-violet-600"></div>
        </div>

      </div>
    </div>
  );
}
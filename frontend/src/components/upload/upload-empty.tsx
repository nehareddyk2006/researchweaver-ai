import { FileUp } from "lucide-react";

export default function UploadEmpty() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-300 bg-white p-12 text-center transition-colors hover:border-indigo-500">
      <div className="mb-6 rounded-full bg-indigo-100 p-5">
        <FileUp className="h-10 w-10 text-indigo-600" />
      </div>

      <h2 className="text-2xl font-semibold tracking-tight">
        Upload Research Papers
      </h2>

      <p className="mt-3 max-w-md text-zinc-500">
        Drag and drop multiple research papers or browse your files to begin
        building your research knowledge graph.
      </p>

      <button className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700">
        Browse PDFs
      </button>

      <p className="mt-4 text-sm text-zinc-400">
        Supports PDF files up to 50 MB each
      </p>
    </div>
  );
}
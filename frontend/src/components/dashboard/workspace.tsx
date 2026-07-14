"use client";

import { useState } from "react";

import { usePaperUpload } from "@/hooks/use-paper-upload";

import UploadZone from "../upload/upload-zone";
import PaperGrid from "../papers/paper-grid";
import PaperDetails from "../papers/paper-details";

import { Paper } from "@/types/paper";

export default function Workspace() {
  const { papers, upload } = usePaperUpload();

  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  async function handleUpload(file: File) {
  const paper = await upload(file);

  setSelectedPaper(paper);
}

  return (
    <div className="space-y-8">

      <UploadZone onUpload={handleUpload} />

      <div className="grid grid-cols-3 gap-8">

        <div>
          <PaperGrid
            papers={papers}
            onSelect={setSelectedPaper}
          />
        </div>

        <div className="col-span-2">
          <PaperDetails paper={selectedPaper} />
        </div>

      </div>

    </div>
  );
}
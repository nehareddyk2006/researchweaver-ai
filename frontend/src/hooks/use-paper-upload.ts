"use client";

import { useState } from "react";
import { Paper } from "@/types/paper";
import { uploadPaper } from "@/services/api";

export function usePaperUpload() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(false);

  async function upload(file: File): Promise<Paper> {
    try {
      setLoading(true);

      const paper = await uploadPaper(file);

      setPapers((prev) => [paper, ...prev]);

return paper;
    } finally {
      setLoading(false);
    }
  }

  return {
    papers,
    loading,
    upload,
  };
}
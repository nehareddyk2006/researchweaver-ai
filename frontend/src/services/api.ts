import axios from "axios";
import { Paper } from "@/types/paper";

export async function uploadPaper(file: File): Promise<Paper> {
  const formData = new FormData();

  formData.append("file", file);

  const { data } = await axios.post(
    "/api/upload",
    formData
  );

  return data;
}
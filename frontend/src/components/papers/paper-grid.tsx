import PaperCard from "./paper-card";
import { Paper } from "@/types/paper";

interface Props {
  papers: Paper[];
  onSelect(paper: Paper): void;
}

export default function PaperGrid({
  papers,
  onSelect,
}: Props) {
  return (
    <div className="space-y-5">

      {papers.map((paper) => (
        <div
          key={paper.id}
          onClick={() => onSelect(paper)}
          className="cursor-pointer"
        >
          <PaperCard paper={paper} />
        </div>
      ))}

    </div>
  );
}
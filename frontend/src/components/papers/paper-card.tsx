import { Paper } from "@/types/paper";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Clock3, BookOpen, Sparkles } from "lucide-react";

interface PaperCardProps {
  paper: Paper;
}

export default function PaperCard({ paper }: PaperCardProps) {
  return (
    <Card className="rounded-2xl border-zinc-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="rounded-xl bg-indigo-100 p-3">
            <FileText className="h-6 w-6 text-indigo-600" />
          </div>

          <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            <Sparkles className="h-3.5 w-3.5" />
            AI Ready
          </div>
        </div>

        <h3 className="mt-5 line-clamp-2 text-lg font-semibold text-zinc-900">
          {paper.title}
        </h3>

        <div className="mt-5 flex flex-wrap gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {paper.pages} pages
          </div>

          <div className="flex items-center gap-1">
            <Clock3 className="h-4 w-4" />
            {paper.reading_time} min read
          </div>
        </div>

        <p className="mt-5 line-clamp-4 text-sm leading-6 text-zinc-600">
          {paper.preview}
        </p>

        <div className="mt-6 border-t pt-4 text-xs text-zinc-400">
          {paper.word_count.toLocaleString()} words
        </div>
      </CardContent>
    </Card>
  );
}
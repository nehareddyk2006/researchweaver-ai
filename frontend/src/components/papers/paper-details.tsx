import { Paper } from "@/types/paper";

interface Props {
  paper: Paper | null;
}

export default function PaperDetails({ paper }: Props) {
  if (!paper) {
    return (
      <div className="rounded-3xl border bg-white p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Welcome to ResearchWeaver
        </h2>

        <p className="mt-4 text-zinc-500">
          Upload a research paper or select one from your library.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border bg-white p-8 space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          {paper.title}
        </h1>

        <p className="mt-2 text-zinc-500">
          {paper.pages} pages • {paper.word_count} words • {paper.reading_time} min read
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">
          Summary
        </h2>

        <p className="mt-2 leading-7 text-zinc-700">
          {paper.preview}
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">
          Full Preview
        </h2>

        <div className="mt-3 max-h-80 overflow-y-auto rounded-xl bg-zinc-50 p-5 whitespace-pre-wrap text-sm leading-7">
          {paper.preview}
        </div>
      </div>

      <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
        ✨ Generate AI Insights
      </button>

    </div>
  );
}
import { Paper } from "@/types/paper";
import {
  Sparkles,
  Target,
  FlaskConical,
  Database,
  Cpu,
  BarChart3,
  AlertTriangle,
  Rocket,
} from "lucide-react";

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

  const analysis = paper.analysis;

  const BadgeList = ({
    items,
    color,
  }: {
    items: string[];
    color: string;
  }) => {
    if (!items?.length) return null;

    return (
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded-full px-3 py-1 text-sm font-medium ${color}`}
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="rounded-3xl border bg-white p-8 space-y-10">

      {/* HEADER */}

      <div>
        <h1 className="text-4xl font-bold">
          {paper.title}
        </h1>

        <p className="mt-3 text-zinc-500">
          {paper.pages} pages • {paper.word_count.toLocaleString()} words •{" "}
          {paper.reading_time} min read
        </p>
      </div>

      {/* AI INSIGHTS */}

      <div className="rounded-2xl border bg-violet-50 p-6">
        <div className="flex items-center gap-2 font-semibold text-violet-700">
          <Sparkles size={18} />
          AI Insights
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Pages
            </p>

            <p className="mt-1 font-semibold">
              {paper.pages}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Words
            </p>

            <p className="mt-1 font-semibold">
              {paper.word_count.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Reading Time
            </p>

            <p className="mt-1 font-semibold">
              {paper.reading_time} min
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Keywords
            </p>

            <p className="mt-1 font-semibold">
              {analysis.keywords.length}
            </p>
          </div>
        </div>
      </div>

      {/* SUMMARY */}

      <Section
        icon={<Sparkles size={18} />}
        title="Summary"
      >
        {analysis.summary || paper.preview}
      </Section>

      {/* RESEARCH PROBLEM */}

      {analysis.research_problem && (
        <Section
          icon={<Target size={18} />}
          title="Research Problem"
        >
          {analysis.research_problem}
        </Section>
      )}

      {/* METHODOLOGY */}

      {analysis.methodology && (
        <Section
          icon={<FlaskConical size={18} />}
          title="Methodology"
        >
          {analysis.methodology}
        </Section>
      )}

      {/* KEYWORDS */}

      {analysis.keywords.length > 0 && (
        <div>
          <SectionTitle
            icon={<Sparkles size={18} />}
            title="Keywords"
          />

          <BadgeList
            items={analysis.keywords}
            color="bg-violet-100 text-violet-700"
          />
        </div>
      )}

      {/* DATASETS */}

      {analysis.datasets.length > 0 && (
        <CardSection
          title="Datasets"
          icon={<Database size={18} />}
          items={analysis.datasets}
        />
      )}

      {/* MODELS */}

      {analysis.models.length > 0 && (
        <CardSection
          title="Models"
          icon={<Cpu size={18} />}
          items={analysis.models}
        />
      )}

      {/* METRICS */}

      {analysis.metrics.length > 0 && (
        <CardSection
          title="Metrics"
          icon={<BarChart3 size={18} />}
          items={analysis.metrics}
        />
      )}

      {/* LIMITATIONS */}

      {analysis.limitations.length > 0 && (
        <ListSection
          title="Limitations"
          icon={<AlertTriangle size={18} />}
          items={analysis.limitations}
        />
      )}

      {/* FUTURE WORK */}

      {analysis.future_work.length > 0 && (
        <ListSection
          title="Future Work"
          icon={<Rocket size={18} />}
          items={analysis.future_work}
        />
      )}

      <details className="rounded-xl bg-zinc-50 p-5">
        <summary className="cursor-pointer font-medium">
          View Original Extracted Text
        </summary>

        <p className="mt-5 whitespace-pre-wrap text-sm leading-7 text-zinc-700">
          {paper.preview}
        </p>
      </details>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: any) {
  return (
    <div className="space-y-3">
      <SectionTitle title={title} icon={icon} />
      <p className="leading-8 text-zinc-700">{children}</p>
    </div>
  );
}

function SectionTitle({ title, icon }: any) {
  return (
    <div className="flex items-center gap-2 border-b pb-3 font-semibold text-lg">
      {icon}
      {title}
    </div>
  );
}

function CardSection({ title, icon, items }: any) {
  return (
    <div>
      <SectionTitle title={title} icon={icon} />

      <div className="mt-5 flex flex-wrap gap-3">
        {items.map((item: string) => (
          <div
            key={item}
            className="rounded-xl border bg-zinc-50 px-4 py-3"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ListSection({ title, icon, items }: any) {
  return (
    <div>
      <SectionTitle title={title} icon={icon} />

      <ul className="mt-5 space-y-3 list-disc pl-6">
        {items.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export interface PaperAnalysis {
  summary: string;
  research_problem: string;
  methodology: string;

  datasets: string[];
  models: string[];
  metrics: string[];

  limitations: string[];
  future_work: string[];
  keywords: string[];
}

export interface Paper {
  id: string;

  filename: string;

  title: string;

  pages: number;

  word_count: number;

  reading_time: number;

  preview: string;

  analysis: PaperAnalysis;
}
export interface Language {
  name: string;
  level: string;
  percent: number; // langauge percentage bar
}

export const languages: Language[] = [
  { name: "English", level: "C1 — IELTS 7.5", percent: 90 },
  { name: "Russian", level: "Native", percent: 100 },
  { name: "Spanish", level: "B1 — LowerIntermediate", percent: 45 },
  { name: "French", level: "A2 — Basic", percent: 30 },
];

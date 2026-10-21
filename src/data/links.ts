export interface LinkEntry {
  label: string;
  url: string;
  icon: string; // filename under public/icons without extension, should render with the theme if not dark... I hope
}

export interface LinkGroup {
  group: string;
  entries: LinkEntry[];
}

export const linkGroups: LinkGroup[] = [
  
  {
    group: "Work / Study",
    entries: [
      { label: "GitHub", url: "https://github.com/bezrukovandrey", icon: "github" },
      { label: "LinkedIn", url: "https://linkedin.com/in/iamandreibezrukov", icon: "linkedin" },
    ],
  },
  
];

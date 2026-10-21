export interface ExperienceGroup {
  heading: string;
  bullets: string[];
}

export interface ExperienceEntry {
  title: string;
  address?: string;
  period: string;
  summary?: string;
  link?: string;
  relatedWork?: string;
  groups?: ExperienceGroup[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Research Intern — Laboratoire d'Informatique de Grenoble (LIG)",
    address: "Grenoble, France",
    period: "Jan – Jun 2026",
    summary:
      "During my internship at LIG, I explored the technical feasibility of reducing reliance on resource-intensive AI approaches in local contexts. I focused on comparing methods of different levels of complexity and examining their computational requirements. This experience strengthened my interest in applied machine learning, experimental evaluation and the environmental implications of AI deployment. My work included:",
    link: "https://www.liglab.fr/",
    relatedWork: "https://github.com/bezrukovandrey/sustainable-ai-experiments",
    groups: [
      {
        heading: "Research and Evaluation",
        bullets: [
          "Building experimental pipelines to compare rule-based approaches, TF-IDF, Sentence Transformers, DistilBERT and TinyLlama for text categorization and recommendation.",
          "Evaluating task performance alongside runtime, memory consumption and computational requirements.",
          "Investigating trade-offs between model complexity and resource efficiency to inform model selection."
        ],
      },
    ],
  },
  {
    title: "Technical Account Manager — Growave",
    address: "Remote",
    period: "Mar – Oct 2026",
    summary: "At Growave, I worked on a Shopify-native loyalty platform, investigating complex technical issues and integration problems that required more than standard customer support. This role helped me develop a systematic approach to debugging and strengthened my ability to communicate technical issues clearly across teams. My work included:",
    link: "https://growave.io/",
    groups: [
      {
        heading: "Technical Support",
        bullets: [
          "Troubleshooting platform customizations and integration issues involving CSS, Liquid, Shadow DOM and SQL.",
          "Reproducing software defects, documenting technical findings and maintaining issue reports in Jira.",
          "Coordinating with Development and QA teams to investigate problems and communicate progress towards resolution.",
        ],
      },
    ],
  },
  {
    title: "IT Support Specialist — Smart Service",
    period: "Apr – Sep 2024",
    summary: "I provided first- and second-line support for MyQRCards and HubEx, handling more than 1,000 user requests. The role gave me practical experience in software troubleshooting, requirements gathering and resolving issues within established SLA. My work included:",
    address: "Saint Petersburg, Russia",
    groups: [
      {
        heading: "Technical Support",
        bullets: [
          "Investigating software problems, testing APIs with Postman and Swagger, using browser developer tools to diagnose issues.",
          "Preparing technical documentation and communicating findings to development and testing teams.",
        ],
      },
    ],
  },
];

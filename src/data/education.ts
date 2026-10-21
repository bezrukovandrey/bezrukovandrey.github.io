export interface EducationEntry {
  title: string;
  period: string;
  institution: string;
  description: string;
}

export const education: EducationEntry[] = [
  {
    title: "MSc Artificial Intelligence (Applied AI track), Year 2 / M2",
    period: "2026 – 2027 (expected)",
   
    institution: "Université Grenoble Alpes / Grenoble INP–Ensimag — Grenoble, France",
    description:
      "My master's studies have allowed me to explore artificial intelligence alongside broader areas of computer science and computer graphics. Selected areas of study include generative AI, computer vision, human-computer interaction, computer graphics and probabilistic models. My current academic interests focus on applied AI, natural language processing, resource-efficient computation and the interaction between people and intelligent systems.",
  },
  {
    title: "MSc Computer Science (MoSIG), Year 1 / M1",
    period: "2025 – 2026",
   
    institution: "Université Grenoble Alpes / Grenoble INP–Ensimag — Grenoble, France",
    description: "My first year of master's studies has provided me with a strong foundation in computer science, covering topics such as algorithms, data structures, operating systems, programming languages, visual computing and software engineering. I have also gained experience in research methodologies which has helped me develop critical thinking and problem-solving skills. ",
  },
  {
    title: "Bachelor's in Mobile and Online Technologies",
    period: "2019 – 2024",
   
    institution: "ITMO University — Saint Petersburg, Russia",
    description: "My undergraduate studies focused on software development and computer science, with a combination of programming, application development, databases, mathematics and computer networks. My bachelor's thesis was Wisenourish, a nutrition-tracking web application designed to help users explore nutritional information, compare food products and plan meals. Developing the project gave me experience translating a practical user need into an interactive software application.",
  },
  {
    title: "Computer Science exchange semester",
    period: "Sep 2023 – Jan 2024",
  
    institution: "Abdullah Gül University — Kayseri, Turkey",
    description: "During my exchange semester, I studied advanced cryptography, operating systems with C++ programming, and mobile application development using Flutter and Dart. Studying in an international environment broadened my academic perspective and gave me the opportunity to learn alongside students from different backgrounds.",
  },
];

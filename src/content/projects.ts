export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    title: "Plexaar CRM & Expert Services",
    category: "CRM / VoIP SaaS",
    description:
      "A CRM with VoIP built in. Businesses sign up, manage clients and staff, book meetings, and run expert service flows with separate provider and end-user roles.",
    stack: ["React", "MUI", "Storybook", "Node.js", "MongoDB", "Redux"],
    outcome:
      "Built the full stack: booking APIs, staff management, and a Storybook component library for the UI.",
  },
  {
    title: "LYCA Audit Tool",
    category: "Enterprise SaaS",
    description:
      "Software for running audits inside organizations: creating clients, running audits, and managing auditor assignments.",
    stack: ["TypeScript", "React", "NestJS", "MongoDB", "Redux", "RTK Query"],
    outcome:
      "NestJS APIs on the backend, React frontend with RTK Query handling most of the data layer.",
  },
  {
    title: "Traddoo Trading App",
    category: "FinTech / Web App",
    description:
      "A trading app with charts, a clean UI, and GraphQL on the backend.",
    stack: ["Next.js", "GraphQL", "Chart.js", "MUI", "Tailwind"],
    outcome:
      "Frontend with GraphQL integration and Chart.js for market data.",
  },
  {
    title: "My Docile",
    category: "FinTech / Platform",
    description:
      "An investment platform where users can invest, buy products, and withdraw funds. Runs on AWS.",
    stack: ["Next.js", "Express", "MongoDB", "Redux", "AWS"],
    outcome:
      "Full-stack app deployed on AWS EC2 with the core investment and withdrawal flows in place.",
  },
];

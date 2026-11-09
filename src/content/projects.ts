export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  outcome: string;
  /** Year shipped, e.g. "2024". Omit to hide the year chip. */
  year?: string;
  /** Short headline result, e.g. "10k+ users" or "60% faster checkout".
   *  Shown as a highlighted pill. Omit to hide. Keep it specific and true. */
  metric?: string;
  /** Live URL. Omit (or set private) to hide the "Visit site" link. */
  link?: string;
  /** Imported thumbnail image. Omit to show a branded gradient placeholder.
   *  To add one: `import shot from "../assets/projects/plexaar.png"` then `image: shot`. */
  image?: string;
}

/*
 * TEMPLATE — copy this for your best work and fill real content:
 * {
 *   title: "Project name",
 *   category: "SaaS / FinTech",
 *   year: "2024",
 *   metric: "A real, specific result",
 *   description: "One or two sentences on what it does and your role.",
 *   stack: ["Next.js", "NestJS", "Postgres"],
 *   outcome: "What you built / shipped.",
 *   link: "https://…",   // omit if private
 *   image: thumbnail,     // omit for the gradient fallback
 * }
 */

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
    title: "TraderOS",
    category: "FinTech / AI Trading Platform",
    description:
      "AI trading workspace for chat-driven research, market reports, a TradingView extension, and journal workflows. I am the primary frontend engineer on the product.",
    stack: ["React", "TypeScript", "Vite", "FastAPI", "NestJS", "Supabase"],
    outcome:
      "Shipped the live React app: Harness workspace/chat, reports, TradingView extension, and NestJS billing/auth surfaces on beta.traderos.ai.",
    link: "https://beta.traderos.ai",
  },
  {
    title: "Eventooz",
    category: "Events / SaaS",
    description:
      "Eventooz lets people in India discover local events and lets organizers run registrations, paid tickets, QR passes, and check-in. I built the attendee and organizer web app, the NestJS API, and the AWS deployment.",
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Supabase",
      "Razorpay",
      "Tailwind CSS",
      "AWS",
      "Terraform",
    ],
    outcome:
      "Shipped event discovery, registration and Razorpay checkout, QR passes, the organizer dashboard, and production hosting on AWS.",
    link: "https://eventooz.com",
  },
];

import crmLogo from "../assets/crm.svg";
import reactLogo from "../assets/react.svg";
import storybook from "../assets/storybook.svg";
import microServiceLogo from "../assets/micro_services.svg";
import awsLogo from "../assets/aws.svg";
import hostingLogo from "../assets/hosting.svg";
import js from "../assets/js.svg";
import backend from "../assets/backend.svg";
import db from "../assets/db.svg";

export interface Service {
  slug: string;
  title: string;
  image: string;
  description: string;
  whoFor?: string;
  deliverables?: string[];
  timeline?: string;
}

export const services: Service[] = [
  {
    slug: "custom-applications",
    title: "Custom CRM, CMS & ERP",
    image: crmLogo,
    description:
      "Custom apps for your business: dashboards, workflows, and admin panels so your team isn't stuck in spreadsheets.",
    whoFor: "Startups and small businesses outgrowing spreadsheets or old tools.",
    deliverables: ["Admin dashboards", "Role-based access", "Reporting & exports"],
    timeline: "6 to 12 weeks for a full product",
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    image: reactLogo,
    description:
      "Get a working MVP out fast so you can test with real users. Built properly so you can extend it later.",
    whoFor: "Founders who need to launch soon and learn from actual usage.",
    deliverables: ["Core user flows", "Auth & payments", "Deploy-ready codebase"],
    timeline: "2 to 4 weeks for a focused MVP",
  },
  {
    slug: "responsive-design",
    title: "Responsive Web Design",
    image: reactLogo,
    description:
      "Interfaces that work on mobile, tablet, and desktop without feeling like an afterthought.",
    whoFor: "Businesses launching something new or refreshing an existing site.",
    deliverables: ["Figma-to-code", "Mobile-first layouts", "Accessibility basics"],
    timeline: "1 to 3 weeks depending on scope",
  },
  {
    slug: "ui-components",
    title: "Storybook UI Components",
    image: storybook,
    description:
      "A shared component library with Storybook docs so your UI stays consistent as the product grows.",
    whoFor: "Teams building more than one product or adding developers.",
    deliverables: ["Component library", "Storybook docs", "Design tokens"],
    timeline: "2 to 4 weeks",
  },
  {
    slug: "microservices",
    title: "Microservices Architecture",
    image: microServiceLogo,
    description:
      "Split a monolith into smaller services so you can deploy and scale parts of the system independently.",
    whoFor: "Products where one big backend is starting to slow things down.",
    deliverables: ["Service design", "API gateways", "Docker setup"],
    timeline: "4 to 8 weeks",
  },
  {
    slug: "aws-integration",
    title: "AWS Cloud Integration",
    image: awsLogo,
    description:
      "Hosting, storage, serverless, and the usual AWS setup so your app can handle real traffic.",
    whoFor: "Apps that need proper cloud infrastructure without overpaying.",
    deliverables: ["S3, Lambda, RDS setup", "CI/CD pipelines", "Monitoring"],
    timeline: "1 to 3 weeks for integration",
  },
  {
    slug: "api-backend",
    title: "API & Backend Development",
    image: microServiceLogo,
    description:
      "REST or GraphQL APIs with auth, validation, and docs that the frontend team can actually use.",
    whoFor: "Mobile apps, SPAs, or third parties that need a backend.",
    deliverables: ["REST/GraphQL APIs", "Auth & validation", "API documentation"],
    timeline: "3 to 6 weeks",
  },
  {
    slug: "maintenance",
    title: "Maintenance & Retainers",
    image: hostingLogo,
    description:
      "Bug fixes, small features, and keeping things running so you can focus on the business side.",
    whoFor: "Teams without a full-time developer who need someone reliable on call.",
    deliverables: ["Monthly hours", "Priority support", "Security updates"],
    timeline: "Ongoing monthly engagement",
  },
];

export const techStack = [
  {
    title: "Frontend",
    image: js,
    description:
      "React, Next.js, Vue, Angular, TypeScript, Tailwind CSS, SCSS",
  },
  {
    title: "Backend",
    image: backend,
    description:
      "Node.js, Express, NestJS, GraphQL, REST APIs, Microservices",
  },
  {
    title: "Database",
    image: db,
    description:
      "PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch",
  },
  {
    title: "Deployment",
    image: hostingLogo,
    description:
      "AWS, GCP, Vercel, Docker, Jenkins, DigitalOcean",
  },
];

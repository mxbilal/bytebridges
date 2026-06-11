export interface WorkExperience {
  period: string;
  company: string;
  role: string;
  location: string;
  highlights: string[];
}

export const workExperience: WorkExperience[] = [
  {
    period: "Sep 2023 to Present",
    company: "Irtiqa Business Solutions",
    role: "Full Stack Developer",
    location: "Remote, Saudi Arabia",
    highlights: [
      "REST APIs with NestJS and MongoDB",
      "SSO setup with React",
      "Micro-frontend and microservices work",
      "Deployments on AWS and Vercel",
    ],
  },
  {
    period: "Mar 2023 to Aug 2023",
    company: "Xint Solutions",
    role: "Frontend Developer",
    location: "Lahore, Pakistan",
    highlights: [
      "Web apps with React, Next.js, and Node",
      "Google Maps integration for live location tracking",
      "Documented, maintainable frontend code",
    ],
  },
  {
    period: "Mar 2021 to Mar 2023",
    company: "Selteq IT Solutions",
    role: "Full Stack Developer",
    location: "Islamabad, Pakistan",
    highlights: [
      "Booking APIs in Node.js",
      "Admin site for managing customers and providers",
      "Reusable components and general performance work",
    ],
  },
];

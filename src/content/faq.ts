export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "A small MVP is usually 2 to 4 weeks. A full CRM, CMS, or SaaS build is more like 6 to 12 weeks depending on scope. I'll put a clear timeline in the proposal after we talk.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Yes. I often jump into existing React, Angular, or Node projects for bug fixes, new features, performance work, or a full refactor.",
  },
  {
    question: "Fixed price or hourly?",
    answer:
      "Either works. Fixed price is good when the scope is clear. Hourly or a monthly retainer makes sense for ongoing work. We'll figure out what fits in the proposal.",
  },
  {
    question: "Who will I be working with?",
    answer:
      "Me, Bilal. I'm the one writing the code and running the project. If it's a bigger build, I may bring in people I trust, but you still have one point of contact.",
  },
  {
    question: "What's your tech stack preference?",
    answer:
      "MERN and Angular are what I use most. I pick the stack based on what the product needs, not what's trending. We'll agree on that early.",
  },
  {
    question: "How do we get started?",
    answer:
      "WhatsApp, email, or the contact form on this site. I usually reply within 1 hour and we can set up a call to go through your idea.",
  },
];

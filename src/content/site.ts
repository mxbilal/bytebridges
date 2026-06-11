export const site = {
  name: "ByteBridges",
  founder: "Bilal",
  fullName: "Muhammad Bilal",
  tagline: "Custom CRM, CMS & SaaS Development",
  location: "Islamabad, Pakistan",
  phone: "+92 3495683110",
  phoneRaw: "923495683110",
  email: "mxbilal0@gmail.com",
  responseTime: "Usually within 1 hour",
  social: {
    github: "https://github.com/mxbilal",
    linkedin: "https://www.linkedin.com/in/mxbilal0",
  },
} as const;

export const whatsappUrl = (message?: string) => {
  const text = message ?? "Hi Bilal, I'd like to discuss a project with ByteBridges.";
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;
};

export const whatsappTemplates = [
  {
    label: "I need an MVP",
    message: "Hi Bilal, I'm looking to build an MVP and would like to discuss scope and timeline.",
  },
  {
    label: "Help with existing app",
    message: "Hi Bilal, I have an existing application that needs improvements. Can we talk?",
  },
  {
    label: "General inquiry",
    message: "Hi Bilal, I'd like to learn more about your development services.",
  },
] as const;

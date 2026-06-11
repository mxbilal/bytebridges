import emailjs from "@emailjs/browser";

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
}

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const initEmailJs = () => {
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

export const sendContactEmail = async (form: ContactFormPayload) => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Email service is not configured.");
  }

  const details = [
    form.projectType && `Project type: ${form.projectType}`,
    form.budget && `Budget: ${form.budget}`,
    form.timeline && `Timeline: ${form.timeline}`,
  ]
    .filter(Boolean)
    .join("\n");

  const message = details
    ? `${form.message}\n\n---\n${details}`
    : form.message;

  return emailjs.send(serviceId, templateId, {
    message,
    subject: form.subject,
    from_name: form.name,
    to_name: "Bilal",
    reply_to: form.email,
  });
};

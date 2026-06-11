import { ChangeEvent, FormEvent, useState } from "react";
import { useSnackbar } from "notistack";
import { Loader2 } from "lucide-react";
import ContactChannels from "./contact/ContactChannels";
import Container from "./ui/Container";
import { sendContactEmail } from "../lib/emailjs";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
  budget: string;
  timeline: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  projectType: "",
  budget: "",
  timeline: "",
};

const projectTypes = [
  "MVP / New product",
  "CRM / CMS / SaaS",
  "Existing app improvement",
  "API / Backend only",
  "Maintenance / Retainer",
  "Other",
];

const budgetRanges = [
  "Under $2,000",
  "$2,000 to $5,000",
  "$5,000 to $15,000",
  "$15,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP",
  "1 to 2 months",
  "3 to 6 months",
  "Flexible",
];

interface ContactUsProps {
  showChannels?: boolean;
  showPageHeader?: boolean;
}

const ContactUs = ({
  showChannels = true,
  showPageHeader = false,
}: ContactUsProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const [formdata, setFormdata] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await sendContactEmail(formdata);
      enqueueSnackbar("Message sent! I'll get back to you soon.", {
        variant: "success",
      });
      setFormdata(initialForm);
    } catch {
      enqueueSnackbar(
        "Failed to send message. Please try WhatsApp or email directly.",
        { variant: "error" }
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-light_gray border border-slate-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm";

  return (
    <div className="py-16 md:py-24 bg-white" id="contact-form">
      <Container>
        {showPageHeader && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Contact
            </p>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-4">
              Let's build something
            </h1>
            <p className="text-muted">
              Tell me about your project and I'll respond within 1 hour.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            {!showPageHeader && (
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-2">
                Start a project
              </h2>
            )}
            {!showPageHeader && (
              <p className="text-muted mb-6">
                Fill out the form and I'll get back to you shortly.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={inputClass}
                    required
                    value={formdata.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={inputClass}
                    required
                    value={formdata.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={inputClass}
                  required
                  value={formdata.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">
                    Project type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className={inputClass}
                    value={formdata.projectType}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className={inputClass}
                    value={formdata.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className={inputClass}
                    value={formdata.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    {timelines.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`${inputClass} resize-none`}
                  required
                  placeholder="Tell me about your project, goals, and any deadlines..."
                  value={formdata.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary_dark transition-colors disabled:opacity-50"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>

          {showChannels && <ContactChannels showTemplates />}
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;

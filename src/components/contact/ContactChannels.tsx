import { Mail, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { site, whatsappUrl, whatsappTemplates } from "../../content/site";
import { scrollToContactForm } from "../../lib/scroll";
import Button from "../ui/Button";

interface ContactChannelsProps {
  showTemplates?: boolean;
  compact?: boolean;
}

const ContactChannels = ({
  showTemplates = false,
  compact = false,
}: ContactChannelsProps) => {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-slate-50 ${compact ? "p-5" : "p-6 md:p-8"
        }`}
    >
      <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
        Get in touch
      </h3>
      <p className="text-muted text-sm mb-6">
        Fastest reply on WhatsApp. {site.responseTime}.
      </p>

      <div className="space-y-3 mb-6">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-green-500 hover:shadow-sm transition-all group"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10 text-green-600">
            <MessageCircle className="w-5 h-5" />
          </span>
          <div>
            <p className="font-semibold text-slate-900 group-hover:text-green-700">
              WhatsApp
            </p>
            <p className="text-sm text-muted">{site.phone}</p>
          </div>
        </a>

        <a
          href={`mailto:${site.email}`}
          className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-primary hover:shadow-sm transition-all group"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
            <Mail className="w-5 h-5" />
          </span>
          <div>
            <p className="font-semibold text-slate-900 group-hover:text-primary">
              Email
            </p>
            <p className="text-sm text-muted">{site.email}</p>
          </div>
        </a>

        {!compact && (
          <>
            <div className="flex items-center gap-3 p-3 text-muted text-sm">
              <Phone className="w-4 h-4 shrink-0" />
              {site.phone}
            </div>
            <div className="flex items-center gap-3 p-3 text-muted text-sm">
              <MapPin className="w-4 h-4 shrink-0" />
              {site.location}
            </div>
            <div className="flex items-center gap-3 p-3 text-muted text-sm">
              <Clock className="w-4 h-4 shrink-0" />
              {site.responseTime}
            </div>
          </>
        )}
      </div>

      {showTemplates && (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-700 mb-2">
            Quick starters
          </p>
          {whatsappTemplates.map((t) => (
            <a
              key={t.label}
              href={whatsappUrl(t.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-primary hover:underline"
            >
              → {t.label}
            </a>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Button variant="outline" className="w-full" onClick={scrollToContactForm}>
          Or use the contact form
        </Button>
      </div>
    </div>
  );
};

export default ContactChannels;

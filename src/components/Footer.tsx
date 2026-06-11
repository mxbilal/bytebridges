import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./ui/SocialIcons";
import { site, whatsappUrl } from "../content/site";
import Container from "./ui/Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-heading font-bold text-xl text-white mb-3">
              ByteBridges
            </h2>
            <p className="text-sm leading-relaxed max-w-md">
              Custom CRM, CMS, and SaaS development by Bilal. Based in Islamabad,
              working with clients remotely. Bigger projects? I bring in a small
              team I trust.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-primary transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-800">
        <Container className="py-4 text-center text-sm text-slate-500">
          &copy; {year} ByteBridges. All rights reserved.
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

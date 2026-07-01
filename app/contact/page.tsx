import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ExternalLink from "@/components/ui/ExternalLink";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Oliver Coltart.",
};

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-8 py-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
        <div>
          <h1 className="text-heading font-black tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-body text-muted leading-relaxed mb-8">
            Have a project in mind, want to collaborate, or just want to say
            hello? Drop me a message and I&apos;ll get back to you.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-label font-medium tracking-widest uppercase text-muted mb-1">
                Email
              </p>
              <ExternalLink
                href="mailto:oli@coltart.org"
                showArrow={false}
                className="text-body hover:text-muted transition-colors"
              >
                oli@coltart.org
              </ExternalLink>
            </div>
            <div>
              <p className="text-label font-medium tracking-widest uppercase text-muted mb-1">
                GitHub
              </p>
              <ExternalLink
                href="https://github.com/olivercoltart"
                className="text-body hover:text-muted transition-colors"
              >
                olivercoltart
              </ExternalLink>
            </div>
            <div>
              <p className="text-label font-medium tracking-widest uppercase text-muted mb-1">
                LinkedIn
              </p>
              <ExternalLink
                href="https://www.linkedin.com/in/oliver-coltart-4436841a8/"
                className="text-body hover:text-muted transition-colors"
              >
                Oliver Coltart
              </ExternalLink>
            </div>
          </div>
        </div>
        {/* <div>
          <Divider className="md:hidden mb-8" />
          <ContactForm />
        </div> */}
        {/* uncomment when want ot include */}
      </div>
    </main>
  );
}

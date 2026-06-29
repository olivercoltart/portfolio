import ExternalLink from "@/components/ui/ExternalLink";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-stroke">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-label text-muted tracking-wide">
          © {new Date().getFullYear()} Oliver Coltart
        </p>
        <div className="flex items-center gap-6">
          <ExternalLink
            href="https://github.com/olivercoltart"
            showArrow={false}
            className="text-label text-muted tracking-widest uppercase hover:text-foreground transition-colors"
          >
            GitHub
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/oliver-coltart-4436841a8/"
            showArrow={false}
            className="text-label text-muted tracking-widest uppercase hover:text-foreground transition-colors"
          >
            LinkedIn
          </ExternalLink>
          <Link
            href="/contact"
            className="text-label text-muted tracking-widest uppercase hover:text-foreground transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

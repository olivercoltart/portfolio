import Link from "next/link";
import NavLink from "@/components/layout/NavLink";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-stroke">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-label font-bold tracking-widest uppercase hover:text-muted transition-colors"
        >
          Oliver Coltart
        </Link>
        <div className="flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

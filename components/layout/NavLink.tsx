"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`text-label font-medium tracking-widest uppercase transition-colors hover:text-foreground ${
        isActive ? "text-foreground" : "text-muted"
      }`}
    >
      {children}
    </Link>
  );
}

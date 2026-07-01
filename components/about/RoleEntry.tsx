import type { Role } from "@/lib/types";
import ExternalLink from "@/components/ui/ExternalLink";

interface RoleEntryProps {
  role: Role;
}

export default function RoleEntry({ role }: RoleEntryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-4 md:gap-12 py-10 border-b border-stroke last:border-b-0">
      <div>
        <p className="font-mono text-label text-muted tracking-wide">
          {role.period}
        </p>
      </div>
      <div>
        <h3 className="font-bold text-subhead mb-0.5">{role.title}</h3>
        <p className="text-label text-muted tracking-wide mb-4">
          {role.companyUrl ? (
            <ExternalLink href={role.companyUrl} className="hover:text-foreground transition-colors">
              {role.company}
            </ExternalLink>
          ) : (
            role.company
          )}
        </p>
        <p className="text-body text-muted leading-relaxed mb-4">
          {role.description}
        </p>
        <ul className="space-y-1">
          {role.highlights.map((highlight, i) => (
            <li key={i} className="text-body text-muted flex items-start gap-2">
              <span className="text-foreground shrink-0 mt-0.5">—</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

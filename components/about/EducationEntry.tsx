import type { Education } from "@/lib/types";

interface EducationEntryProps {
  education: Education;
}

export default function EducationEntry({ education }: EducationEntryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-4 md:gap-12 py-10 border-b border-stroke last:border-b-0">
      <div>
        <p className="font-mono text-label text-muted tracking-wide">
          {education.period}
        </p>
      </div>
      <div>
        <h3 className="font-bold text-subhead mb-0.5">{education.degree}</h3>
        <p className="text-label text-muted tracking-wide mb-4">
          {education.institution}
        </p>
          <p className="text-body text-muted flex items-start gap-2">
            {education.result}
          </p>
      </div>
    </div>
  ); 
}

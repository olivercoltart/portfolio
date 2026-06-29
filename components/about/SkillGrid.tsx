import Tag from "@/components/ui/Tag";

interface SkillGridProps {
  skills: string[];
}

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Tag key={skill}>{skill}</Tag>
      ))}
    </div>
  );
}

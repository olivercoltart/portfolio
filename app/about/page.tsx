import type { Metadata } from "next";
import { cv } from "@/lib/data/cv";
import RoleEntry from "@/components/about/RoleEntry";
import SkillGrid from "@/components/about/SkillGrid";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer and product developer. Background in full-stack web development and product strategy.",
};

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-8 py-section">
      <div className="max-w-3xl">
        <h1 className="text-heading font-black tracking-tight mb-8">About</h1>

        <p className="text-subhead text-muted leading-relaxed mb-section">
          I&apos;m Oli — a software engineer and product developer. Following my degree in Mechanical 
          Engineering, I pursued a career in Product Development where I collaborated closely with Software Engineers 
          to implement new features for a web-based lettings platform. This experience sparked a deep interest in 
          Software Development that led me to return to University. Throughout my career I&apos;ve bridged the gap 
          from customer issues to product solutions, and have since developed the technical skills required to 
          implement these solutions as a Software Engineer. Outside of work, I am a committed sportsman, having 
          represented multiple University tennis teams and captained a London 6-a-side football team. I also enjoy 
          building electronic Arduino projects, with 3D printed designs, as a hobby.
        </p>

        <Divider className="mb-12" />

        <h2 className="text-label font-medium tracking-widest uppercase text-muted mb-10">
          Experience
        </h2>

        <div>
          {cv.roles.map((role, i) => (
            <RoleEntry key={i} role={role} />
          ))}
        </div>

        <Divider className="my-12" />

        <h2 className="text-label font-medium tracking-widest uppercase text-muted mb-6">
          Skills
        </h2>
        <SkillGrid skills={cv.skills} />

        <Divider className="my-12" />

        <h2 className="text-label font-medium tracking-widest uppercase text-muted mb-6">
          Education
        </h2>
        {cv.education.map((edu, i) => (
          <div key={i} className="py-4">
            <p className="font-bold text-body">{edu.degree}</p>
            <p className="text-label text-muted tracking-wide">
              {edu.institution} · {edu.result} · {edu.period}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

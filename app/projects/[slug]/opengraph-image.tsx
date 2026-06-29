import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0f0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
        }}
      >
        <p
          style={{
            color: "#737373",
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            margin: "0 0 24px",
          }}
        >
          Oliver Coltart / Projects
        </p>
        <h1
          style={{
            color: "#f0f0f0",
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
          }}
        >
          {project?.title ?? "Project"}
        </h1>
        {project && (
          <p
            style={{
              color: "#a0a0a0",
              fontSize: 24,
              margin: 0,
            }}
          >
            {project.tagline}
          </p>
        )}
      </div>
    ),
    size
  );
}

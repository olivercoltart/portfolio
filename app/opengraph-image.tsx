import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          Software Engineer &amp; Product Developer
        </p>
        <h1
          style={{
            color: "#f0f0f0",
            fontSize: 80,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          Oliver Coltart
        </h1>
      </div>
    ),
    size
  );
}

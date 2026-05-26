import { ImageResponse } from "next/og";
import { siteConfig } from "./siteMetadata";

export const alt = "Henrique Mancini - Portfólio de Engenharia de Software";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "#fafafa",
          padding: "72px",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#a1a1aa",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <span>{siteConfig.name}</span>
          <span>Software Engineering</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              border: "1px solid #3f3f46",
              borderRadius: 999,
              padding: "10px 18px",
              color: "#d4d4d8",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Full-stack portfolio
          </div>
          <h1
            style={{
              margin: 0,
              maxWidth: 980,
              fontSize: 74,
              lineHeight: 1.04,
              letterSpacing: 0,
              fontWeight: 800,
            }}
          >
            Sistemas robustos, da infraestrutura à interface.
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 920,
              color: "#d4d4d8",
              fontSize: 32,
              lineHeight: 1.35,
            }}
          >
            Next.js, Spring Boot, Java, PostgreSQL e Ciência de Dados.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            color: "#d4d4d8",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          {["Backend", "Frontend", "Dados"].map((item) => (
            <span
              key={item}
              style={{
                border: "1px solid #27272a",
                borderRadius: 999,
                padding: "10px 18px",
                background: "#18181b",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

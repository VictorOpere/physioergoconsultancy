import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/content";

export const alt =
  "PhysioErgo Integrative Consultancy Ltd — Wellness in Motion. Workplace ergonomics and wellness in Nairobi, Kenya.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [semiBold, regular] = await Promise.all([
    readFile(join(process.cwd(), "app/og/SofiaPro-SemiBold.otf")),
    readFile(join(process.cwd(), "app/og/SofiaPro-Regular.otf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "Sofia Pro",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -160,
            width: 560,
            height: 560,
            borderRadius: 9999,
            backgroundColor: "#E4F2D9",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: 9999,
            backgroundColor: "#F4F6F3",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              backgroundColor: "#3F6B24",
            }}
          />
          <div
            style={{
              fontSize: 25,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#3F6B24",
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#15201A",
            }}
          >
            Healthier Workplaces.
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#3F6B24",
            }}
          >
            Better Performance.
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 27,
              lineHeight: 1.5,
              color: "#51594F",
              maxWidth: 820,
            }}
          >
            Integrated ergonomics and physiotherapy solutions for safer,
            higher-performing workplaces.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E2E6E1",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 27, fontWeight: 600, color: "#15201A" }}>
            PhysioErgo Integrative Consultancy Ltd
          </div>
          <div style={{ fontSize: 24, color: "#51594F" }}>Nairobi, Kenya</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sofia Pro", data: semiBold, weight: 600, style: "normal" },
        { name: "Sofia Pro", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}

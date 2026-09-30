import type { SVGProps } from "react";

/**
 * Thin-stroke line icons drawn on a 24x24 grid. Inline SVG keeps the set free of
 * dependencies and lets stroke colour inherit from the surrounding text colour.
 */
const paths = {
  posture: (
    <>
      <circle cx="9" cy="4.5" r="2" />
      <path d="M9 6.5v6l-2.5 8M9 12.5l3.5 1.5 2 6.5" />
      <path d="M12.5 14 17 9.5" />
      <path d="M19 4v16" />
    </>
  ),
  mind: (
    <>
      <path d="M12 4a5 5 0 0 0-5 5c0 1.6.7 2.8 1.6 3.8.7.8 1.1 1.7 1.1 2.7V17h4.6v-1.5c0-1 .4-1.9 1.1-2.7C16.3 11.8 17 10.6 17 9a5 5 0 0 0-5-5Z" />
      <path d="M10 20h4" />
      <path d="M12 9v4" />
      <path d="M12 9 10.2 7.5M12 9l1.8-1.5" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M10.5 6.8 6.4 15.9M13.5 6.8l4.1 9.1M7.2 18h9.6" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4.5h6M8 6h8a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 16 20H8a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 8 6Z" />
      <path d="M9.5 3.5h5V6h-5z" />
      <path d="M9 11h6M9 14.5h4" />
    </>
  ),
  desk: (
    <>
      <path d="M4 15h16M5 15v5M19 15v5" />
      <path d="M8 15V9.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1V15" />
      <path d="M10 12h4" />
      <path d="M12 4v4.5" />
    </>
  ),
  hands: (
    <>
      <path d="M4 13.5c0-1 .8-1.8 1.8-1.8h1.4l3 3.2h2.6" />
      <path d="M20 13.5c0-1-.8-1.8-1.8-1.8h-1.4l-3 3.2" />
      <path d="M4 13.5 8 19h8l4-5.5" />
      <path d="M12 4v5M9.5 6.5 12 4l2.5 2.5" />
    </>
  ),
  training: (
    <>
      <path d="M3.5 8.5 12 4.5l8.5 4-8.5 4z" />
      <path d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11" />
      <path d="M20.5 8.5v5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5.5 6v6c0 4 2.8 7 6.5 8.5 3.7-1.5 6.5-4.5 6.5-8.5V6z" />
      <path d="m9.3 12 1.9 1.9 3.5-3.9" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-1.6 4-4 1.6 1.6-4z" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-7 4.5-11 14-11 0 8-4.5 11.5-10 11.5A4 4 0 0 1 5 19Z" />
      <path d="M8.5 15.5c2-2.5 4.5-4 7.5-5" />
    </>
  ),
  people: (
    <>
      <circle cx="9.5" cy="8" r="2.8" />
      <path d="M4.5 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M16 6.2a2.8 2.8 0 0 1 0 5.4" />
      <path d="M16.5 14.5c1.8.6 3 2.3 3 4.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19h16" />
      <path d="M7 19v-5M11.6 19V8M16.2 19v-8" />
      <path d="m5.5 9 4-3.5 4 2.5 5-4" />
    </>
  ),
  building: (
    <>
      <path d="M5 20V5.5A1.5 1.5 0 0 1 6.5 4h7A1.5 1.5 0 0 1 15 5.5V20" />
      <path d="M15 10h3.5A1.5 1.5 0 0 1 20 11.5V20" />
      <path d="M3.5 20h17" />
      <path d="M8 8h4M8 11.5h4M8 15h4M17.5 13.5v3" />
    </>
  ),
  hybrid: (
    <>
      <path d="M3.5 6.5h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
      <path d="M5.5 17.5h5" />
      <path d="M16.5 10h4a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1Z" />
      <path d="M18 16.5h1" />
    </>
  ),
  home: (
    <>
      <path d="m4 11 8-6.5 8 6.5" />
      <path d="M6 9.8V19h12V9.8" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  institution: (
    <>
      <path d="M3.5 9.5 12 4.5l8.5 5" />
      <path d="M5.5 10v8M10 10v8M14 10v8M18.5 10v8" />
      <path d="M3.5 19.5h17" />
    </>
  ),
  pulse: (
    <>
      <path d="M3.5 12h4l2-4.5 3 9 2.5-4.5h5.5" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  arrow: (
    <>
      <path d="M5 12h13" />
      <path d="m12.5 6 6 6-6 6" />
    </>
  ),
  phone: (
    <path d="M7.5 3.8 9.8 4l1.1 3.4-1.8 1.5a11 11 0 0 0 5 5l1.5-1.8 3.4 1.1.2 2.3a1.6 1.6 0 0 1-1.7 1.7C11.2 17 7 12.8 5.8 5.5a1.6 1.6 0 0 1 1.7-1.7Z" />
  ),
  mail: (
    <>
      <path d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z" />
      <path d="m3.5 7.5 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.5 6-7.8 6-10.5a6 6 0 1 0-12 0C6 13.2 8 16.5 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </>
  ),
  menu: <path d="M4 7.5h16M4 16.5h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  quote: (
    <>
      <path d="M9.5 6.5C6.8 7.8 5.5 10 5.5 13v4.5h5V12H8c0-1.8.8-3.2 2.4-4.1z" />
      <path d="M18 6.5c-2.7 1.3-4 3.5-4 6.5v4.5h5V12h-2.5c0-1.8.8-3.2 2.4-4.1z" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

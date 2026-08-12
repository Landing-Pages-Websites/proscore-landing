import type { JSX, SVGProps } from "react";

// Single icon family, lucide-style stroked SVGs (24×24, currentColor).
// Never emoji. Keys map to the `icon` strings used in content.ts.

type IconPaths = JSX.Element;

const PATHS: Record<string, IconPaths> = {
  spreadsheet: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M3 15h18M9 4v16M15 4v16" />
    </>
  ),
  ratio: (
    <>
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
      <path d="M5 19 19 5" />
    </>
  ),
  "shield-alert": (
    <>
      <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6Z" />
      <path d="M12 9v4M12 16.5v.01" />
    </>
  ),
  activity: <path d="M3 12h4l2.5 7 5-15L17 12h4" />,
  "file-check": (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="m9 15 2 2 3.5-3.5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </>
  ),
  trending: (
    <>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  credit: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2.5" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 8v5m18-5v5" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3 1.5 5 4.5 5 8 0 1.8-.6 3.4-1.6 4.7L14 17h-4l-1.4-1.3C7.6 14.4 7 12.8 7 11c0-3.5 2-6.5 5-8Z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M9 17c-1.5.5-2.5 1.8-2.5 3.5C8.2 20 9.5 19 10 17.5M15 17c1.5.5 2.5 1.8 2.5 3.5C15.8 20 14.5 19 14 17.5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2Zm16 0a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2Z" />
      <path d="M20 17v1a3 3 0 0 1-3 3h-3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
    </>
  ),
  arrow: <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />,
  check: <path d="m4.5 12.75 6 6 9-13.5" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 4.5v15m7.5-7.5h-15" />,
  quote: (
    <path d="M7 7c-2 1-3 3-3 6v4h5v-5H6c0-2 .8-3.4 2.4-4.2ZM17 7c-2 1-3 3-3 6v4h5v-5h-3c0-2 .8-3.4 2.4-4.2Z" />
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof PATHS | string;
}

export function Icon({ name, className, ...rest }: IconProps): JSX.Element | null {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {path}
    </svg>
  );
}

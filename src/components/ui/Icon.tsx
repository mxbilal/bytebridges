export type IconName =
  | "dashboard"
  | "rocket"
  | "responsive"
  | "components"
  | "microservices"
  | "cloud"
  | "api"
  | "maintenance"
  | "frontend"
  | "backend"
  | "database"
  | "deploy"
  | "react"
  | "vue"
  | "angular";

interface IconProps {
  name: IconName;
  className?: string;
}

// Single inline-SVG icon set. Everything draws with `currentColor`, so an icon
// takes the colour of whatever wraps it (e.g. `text-primary`). Stroke-based,
// 24x24, so the icons stay crisp at any size and match across the site.
const paths: Record<IconName, JSX.Element> = {
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  responsive: (
    <>
      <rect x="2" y="3" width="14" height="11" rx="1.5" />
      <path d="M6 20h5" />
      <rect x="15" y="11" width="7" height="10" rx="1.5" />
    </>
  ),
  components: (
    <>
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12z" />
      <path d="M12 2.5 15.5 6 12 9.5 8.5 6z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12z" />
      <path d="M12 15.5 15.5 19 12 22.5 8.5 19z" />
    </>
  ),
  microservices: (
    <>
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <path d="M12 8v4M5 16v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
    </>
  ),
  cloud: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />,
  api: (
    <>
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <rect x="2" y="13" width="20" height="8" rx="2" />
      <path d="M6 7h.01M6 17h.01" />
    </>
  ),
  maintenance: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  frontend: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  backend: (
    <>
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <rect x="2" y="13" width="20" height="8" rx="2" />
      <path d="M6 7h.01M6 17h.01M15 7h3M15 17h3" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </>
  ),
  deploy: (
    <>
      <path d="M12 13v8M16 16l-4-4-4 4" />
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
    </>
  ),
  react: (
    <>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
    </>
  ),
  vue: (
    <>
      <path d="M3 4h4l5 8 5-8h4L12 21 3 4z" />
      <path d="M8 4l4 6 4-6" />
    </>
  ),
  angular: (
    <>
      <path d="M12 2 3 5l1.5 12L12 22l7.5-5L21 5 12 2z" />
      <path d="m8.5 16 3.5-9 3.5 9M9.7 13.5h4.6" />
    </>
  ),
};

const Icon = ({ name, className = "w-6 h-6" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {paths[name]}
  </svg>
);

export default Icon;

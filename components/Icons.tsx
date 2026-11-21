type P = React.SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const Icon = {
  folder: (p: P) => (
    <svg {...base(p)}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
  ),
  briefcase: (p: P) => (
    <svg {...base(p)}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></svg>
  ),
  layers: (p: P) => (
    <svg {...base(p)}><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></svg>
  ),
  award: (p: P) => (
    <svg {...base(p)}><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></svg>
  ),
  quote: (p: P) => (
    <svg {...base(p)}><path d="M4 21c3-1 5-4 5-8V5H3v8h6M15 21c3-1 5-4 5-8V5h-6v8h6" /></svg>
  ),
  mail: (p: P) => (
    <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  github: (p: P) => (
    <svg {...base(p)}><path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.8-.3 5.8-1.4 5.8-6.3A4.9 4.9 0 0 0 18.7 5.5 4.5 4.5 0 0 0 18.6 2S17.5 1.7 15 3.3a12.3 12.3 0 0 0-6 0C6.5 1.7 5.4 2 5.4 2a4.5 4.5 0 0 0-.1 3.5A4.9 4.9 0 0 0 4 8.9c0 4.9 3 6 5.8 6.3a3 3 0 0 0-.8 2.3V21" /></svg>
  ),
  code: (p: P) => (
    <svg {...base(p)}><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></svg>
  ),
  monitor: (p: P) => (
    <svg {...base(p)}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
  ),
  phone: (p: P) => (
    <svg {...base(p)}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>
  ),
  database: (p: P) => (
    <svg {...base(p)}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
  ),
  rocket: (p: P) => (
    <svg {...base(p)}><path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1zM12 15l-3-3a22 22 0 0 1 2-4A13 13 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z" /><path d="M9 12H4s.6-3 2-4c1.6-1 5 0 5 0M12 15v5s3-.6 4-2c1-1.6 0-5 0-5" /></svg>
  ),
  pencil: (p: P) => (
    <svg {...base(p)}><path d="M17 3a2.8 2.8 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5z" /></svg>
  ),
  cap: (p: P) => (
    <svg {...base(p)}><path d="m22 10-10-5-10 5 10 5z" /><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6" /></svg>
  ),
  star: (p: P) => (
    <svg {...base(p)}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" /></svg>
  ),
  spark: (p: P) => (
    <svg {...base(p)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
  ),
  sun: (p: P) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
  ),
  moon: (p: P) => (
    <svg {...base(p)}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" /></svg>
  ),
  menu: (p: P) => (
    <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  ),
  x: (p: P) => (
    <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
  ),
  copy: (p: P) => (
    <svg {...base(p)}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" /></svg>
  ),
  search: (p: P) => (
    <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
  ),
  check: (p: P) => (
    <svg {...base(p)}><path d="m5 12 5 5L20 7" /></svg>
  ),
};

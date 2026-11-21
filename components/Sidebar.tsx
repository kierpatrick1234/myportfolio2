"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/resume";
import { Icon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export const sections = [
  { id: "projects", label: "Projects", icon: Icon.folder },
  { id: "experience", label: "Experience", icon: Icon.briefcase },
  { id: "stack", label: "Stack", icon: Icon.layers },
  { id: "certifications", label: "Certifications", icon: Icon.award },
  { id: "recommendations", label: "Recommendations", icon: Icon.quote },
  { id: "contact", label: "Contact", icon: Icon.mail },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the section currently in view
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const openCmd = () => window.dispatchEvent(new Event("open-cmdk"));

  return (
    <>
      {/* Mobile top bar */}
      <div className="topbar">
        <a href="#top" className="brand">{profile.name.split(" ")[0]} {profile.name.split(" ").at(-1)}</a>
        <button className="icon-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <Icon.menu width={18} height={18} />
        </button>
      </div>

      <div className={`scrim ${open ? "show" : ""}`} onClick={() => setOpen(false)} aria-hidden />

      <aside className={`sidebar ${open ? "open" : ""}`} aria-label="Sidebar">
        <div className="sidebar-head">
          <a href="#top" className="brand" onClick={() => setOpen(false)}>
            {profile.name.split(" ")[0]} {profile.name.split(" ").at(-1)}
          </a>
          <button className="icon-btn mobile-only" aria-label="Close menu" onClick={() => setOpen(false)}>
            <Icon.x width={18} height={18} />
          </button>
        </div>

        <nav className="side-nav" aria-label="Sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              <s.icon />
              {s.label}
            </a>
          ))}
        </nav>

        <hr />

        <nav className="side-nav plain" aria-label="Elsewhere">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label[0].toUpperCase() + s.label.slice(1)} <span className="dim">↗</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-foot">
          <button className="kbd-row" onClick={openCmd}>
            Quick jump <span><kbd>⌘</kbd> + <kbd>K</kbd></span>
          </button>
          <hr />
          <ThemeToggle />
          <p className="foot-note">For work, collabs & everything else, reach me at</p>
          <a className="foot-mail" href={`mailto:${profile.email}`}>
            <Icon.mail /> {profile.email}
          </a>
        </div>
      </aside>
    </>
  );
}

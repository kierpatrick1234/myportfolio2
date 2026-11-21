"use client";

import { useState } from "react";
import type { Project } from "@/content/resume";

/** Fanned card deck: centre card is active; click a side card (or use ← →) to bring it forward. */
export function ProjectStack({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const n = projects.length;

  const pos = (i: number) => {
    let d = (i - active + n) % n;
    if (d > n / 2) d -= n;
    return d; // -1 left, 0 centre, 1 right
  };

  return (
    <div
      className="deck"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Projects"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") setActive((a) => (a + 1) % n);
        if (e.key === "ArrowLeft") setActive((a) => (a - 1 + n) % n);
      }}
    >
      {projects.map((p, i) => {
        const d = pos(i);
        const isActive = d === 0;
        return (
          <article
            key={p.title}
            className={`card deck-card ${isActive ? "is-active" : ""}`}
            data-pos={Math.max(-2, Math.min(2, d))}
            aria-hidden={!isActive}
            onClick={() => !isActive && setActive(i)}
          >
            <div className="pills">
              {p.tags.map((t, j) => (
                <span key={t} className={j === 0 ? "pill pill-solid" : "pill"}>
                  {j === 0 && <span aria-hidden>❮ </span>}
                  {t}
                  {j === 0 && <span aria-hidden> ❯</span>}
                </span>
              ))}
            </div>
            <div className="app-head">
              <span className="app-icon" style={{ background: p.color }} aria-hidden>
                {p.icon}
              </span>
              <h3>{p.title}</h3>
            </div>
            <p className="app-tag">{p.tagline}</p>
            <ul className="mini-stack">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="app-actions">
              {p.href && (
                <a className="btn-dark" href={p.href} tabIndex={isActive ? 0 : -1}>
                  Live demo ↗
                </a>
              )}
              {p.repo && (
                <a className="btn-line" href={p.repo} tabIndex={isActive ? 0 : -1}>
                  Source code
                </a>
              )}
            </div>
          </article>
        );
      })}
      <div className="deck-dots" role="tablist" aria-label="Choose project">
        {projects.map((p, i) => (
          <button
            key={p.title}
            role="tab"
            aria-selected={i === active}
            aria-label={p.title}
            className={i === active ? "on" : ""}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}

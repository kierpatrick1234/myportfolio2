"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "@/content/resume";
import { sections } from "./Sidebar";
import { applyTheme } from "./ThemeToggle";
import { Icon } from "./Icons";

type Item = { label: string; hint: string; run: () => void };

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(
    () => [
      ...sections.map((s) => ({
        label: `Go to ${s.label}`,
        hint: "section",
        run: () => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }),
      })),
      { label: "Copy email", hint: profile.email, run: () => navigator.clipboard?.writeText(profile.email) },
      ...profile.socials.map((s) => ({
        label: `Open ${s.label}`,
        hint: "link",
        run: () => window.open(s.href, "_blank", "noreferrer"),
      })),
      { label: "Light theme", hint: "theme", run: () => applyTheme("light") },
      { label: "Dark theme", hint: "theme", run: () => applyTheme("dark") },
      { label: "System theme", hint: "theme", run: () => applyTheme("system") },
    ],
    []
  );

  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-cmdk", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-cmdk", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      setIdx(0);
      setTimeout(() => input.current?.focus(), 0);
    }
  }, [open]);

  if (!open) return null;

  const run = (i: Item) => {
    setOpen(false);
    i.run();
  };

  return (
    <div className="cmdk-scrim" onClick={() => setOpen(false)}>
      <div className="cmdk" role="dialog" aria-modal="true" aria-label="Quick jump" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk-input">
          <Icon.search />
          <input
            ref={input}
            value={q}
            placeholder="Where to?"
            onChange={(e) => {
              setQ(e.target.value);
              setIdx(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setIdx((i) => Math.min(i + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setIdx((i) => Math.max(i - 1, 0));
              } else if (e.key === "Enter" && filtered[idx]) run(filtered[idx]);
            }}
          />
          <kbd>esc</kbd>
        </div>
        <ul className="cmdk-list" role="listbox">
          {filtered.length === 0 && <li className="cmdk-empty">No results</li>}
          {filtered.map((it, i) => (
            <li
              key={it.label}
              role="option"
              aria-selected={i === idx}
              className={i === idx ? "on" : ""}
              onMouseEnter={() => setIdx(i)}
              onClick={() => run(it)}
            >
              <span>{it.label}</span>
              <span className="dim">{it.hint}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

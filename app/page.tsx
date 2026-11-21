import {
  profile,
  bio,
  badges,
  stats,
  projects,
  experience,
  stack,
  certifications,
  recommendations,
} from "@/content/resume";
import { Icon } from "@/components/Icons";
import { Sidebar } from "@/components/Sidebar";
import { ProjectStack } from "@/components/ProjectStack";
import { CommandMenu } from "@/components/CommandMenu";
import { CopyEmail } from "@/components/CopyEmail";
import { GitHubGraph } from "@/components/GitHubGraph";

function SectionHead({ n, title, link }: { n: string; title: string; link?: { label: string; href: string } }) {
  return (
    <div className="sec-head">
      <h2>
        <span className="mono">{n}</span> — {title}
      </h2>
      {link && (
        <a href={link.href} className="label link" {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
          {link.label} →
        </a>
      )}
    </div>
  );
}

const initials = (s: string) =>
  s
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function Home() {
  const github = profile.socials.find((s) => s.label === "github")?.href ?? "#";
  let n = 0;
  const num = () => String(++n).padStart(2, "0");

  return (
    <div className="shell">
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Sidebar />
      <CommandMenu />

      <main id="main" className="main">
        <div className="dots dots-tr" aria-hidden />

        {/* ── Hero ─────────────────────────────── */}
        <section id="top" className="hero">
          <div className="photo">
            {profile.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <div className="photo-ph" aria-label="Photo placeholder">
                <span>{initials(profile.name)}</span>
              </div>
            )}
          </div>

          <div className="hero-text">
            <h1>{profile.name}</h1>
            {bio.map((para, i) => (
              <p key={i} className="bio">
                {para.map((seg, j) => {
                  if (typeof seg === "string") return <span key={j}>{seg}</span>;
                  const I = Icon[seg.icon as keyof typeof Icon] ?? Icon.spark;
                  return (
                    <span key={j} className="chip">
                      <I /> {seg.chip}
                    </span>
                  );
                })}
              </p>
            ))}
            <ul className="socials">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label} <span className="dim">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Badges + stats ───────────────────── */}
        <section className="grid3 badges" aria-label="Highlights">
          {badges.map((b) => {
            const I = Icon[b.icon];
            return (
              <div key={b.title} className="badge">
                <I width={20} height={20} />
                <div>
                  <p className="mono strong">{b.title}</p>
                  <p className="label">{b.sub}</p>
                </div>
              </div>
            );
          })}
        </section>
        <section className="grid3 stats" aria-label="Stats">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="stat">
                {s.value}
                <span className="dim">{s.suffix}</span>
              </p>
              <p className="label">{s.label}</p>
            </div>
          ))}
        </section>
        <div className="dots dots-band" aria-hidden />

        {/* ── Projects ─────────────────────────── */}
        <section id="projects" className="sec">
          <SectionHead n={num()} title="projects" link={{ label: "all projects", href: github }} />
          <ProjectStack projects={projects} />
        </section>

        {/* ── Experience ───────────────────────── */}
        <section id="experience" className="sec">
          <SectionHead n={num()} title="experience" />
          <ol className="rows">
            {experience.map((e) => (
              <li key={e.role + e.year}>
                <span className="label">{e.year}</span>
                <span className="strong">{e.role}</span>
                <span className="muted right">{e.org}</span>
              </li>
            ))}
          </ol>

          <div id="stack" className="stack">
            <div className="sec-head small">
              <p className="label">stack</p>
            </div>
            <ul className="tech">
              {stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
              <li className="more">+ learning</li>
            </ul>
          </div>
        </section>

        {/* ── Certifications ───────────────────── */}
        {certifications.length > 0 && (
          <section id="certifications" className="sec">
            <SectionHead n={num()} title="certifications" />
            <div className="grid-cards">
              {certifications.map((c) => (
                <div key={c.title} className="card cert">
                  <span className="cert-mark">{c.mark}</span>
                  <h3>{c.title}</h3>
                  <p className="label">{c.issuer}</p>
                  <a href={c.href} className="label link verify" target="_blank" rel="noreferrer">
                    ❮ verify ❯
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Recommendations ──────────────────── */}
        {recommendations.length > 0 && (
          <section id="recommendations" className="sec">
            <SectionHead n={num()} title="recommendations" />
            <div className="grid-cards">
              {recommendations.map((r) => (
                <figure key={r.name} className="card quote">
                  <span className="qmark" aria-hidden>
                    “
                  </span>
                  <blockquote>{r.quote}</blockquote>
                  <figcaption>
                    <span className="avatar">{initials(r.name)}</span>
                    <span>
                      <span className="strong">{r.name}</span>
                      <span className="label block">{r.title}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* ── GitHub ───────────────────────────── */}
        {profile.github && (
          <section id="github" className="sec">
            <SectionHead n={num()} title="github" link={{ label: `@${profile.github}`, href: `https://github.com/${profile.github}` }} />
            <GitHubGraph user={profile.github} />
          </section>
        )}

        {/* ── Contact ──────────────────────────── */}
        <section id="contact" className="sec contact">
          <SectionHead n={num()} title="say hello" />
          <p className="lead">
            Have a project, an internship, or just want to talk shop? My inbox is open — I usually reply within a day.
          </p>
          <div className="mail-row">
            <a href={`mailto:${profile.email}`} className="mail">
              {profile.email}
            </a>
            <CopyEmail email={profile.email} />
            <a href={`mailto:${profile.email}`} className="btn-dark">
              Open mail app ↗
            </a>
          </div>
        </section>

        <footer className="footer">
          <span className="label">© {new Date().getFullYear()} {profile.shortName}</span>
          <span className="label">
            Press <kbd>⌘</kbd> <kbd>K</kbd> to jump anywhere
          </span>
        </footer>
      </main>
    </div>
  );
}

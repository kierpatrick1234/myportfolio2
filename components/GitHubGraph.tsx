type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

/** Live contribution graph, fetched at build time and refreshed daily. Renders nothing if it fails. */
export async function GitHubGraph({ user }: { user: string }) {
  let days: Day[] = [];
  let total = 0;
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(user)}?y=last`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    days = data.contributions ?? [];
    total = data.total?.lastYear ?? days.reduce((s, d) => s + d.count, 0);
  } catch {
    return null;
  }
  if (!days.length) return null;

  // Group into week columns (Sunday-first)
  const weeks: (Day | null)[][] = [];
  const pad = new Date(days[0].date).getDay();
  let col: (Day | null)[] = Array(pad).fill(null);
  for (const d of days) {
    col.push(d);
    if (col.length === 7) {
      weeks.push(col);
      col = [];
    }
  }
  if (col.length) weeks.push(col);

  return (
    <div>
      <div className="gh-graph" role="img" aria-label={`${total} contributions in the last year`}>
        {weeks.map((w, i) => (
          <div key={i} className="gh-week">
            {w.map((d, j) => (
              <span key={j} className="gh-day" data-l={d?.level ?? -1} title={d ? `${d.count} on ${d.date}` : undefined} />
            ))}
          </div>
        ))}
      </div>
      <p className="label mt-12">{total.toLocaleString()} contributions in the last year</p>
    </div>
  );
}

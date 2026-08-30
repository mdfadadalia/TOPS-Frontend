export default function Pagination({ page, totalPages, onChange, total }) {
  if (!totalPages || totalPages <= 1) {
    return total ? (
      <div
        className="d-flex justify-content-between align-items-center px-1 py-2"
        style={{ fontSize: 12.5, color: "var(--text-muted)" }}
      >
        <span>
          {total} result{total === 1 ? "" : "s"}
        </span>
      </div>
    ) : null;
  }

  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, start + 4);
  for (let p = start; p <= end; p++) pages.push(p);

  return (
    <div className="d-flex justify-content-between align-items-center px-1 py-2 flex-wrap gap-2">
      <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>
        Showing page {page} of {totalPages} {total ? `· ${total} results` : ""}
      </span>
      <div className="btn-group btn-group-sm">
        <button
          className="btn btn-outline-console"
          disabled={page <= 1}
          onClick={() => onChange(page - 1)}
        >
          <i className="bi bi-chevron-left" />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            className={`btn ${p === page ? "btn-accent" : "btn-outline-console"}`}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        ))}
        <button
          className="btn btn-outline-console"
          disabled={page >= totalPages}
          onClick={() => onChange(page + 1)}
        >
          <i className="bi bi-chevron-right" />
        </button>
      </div>
    </div>
  );
}

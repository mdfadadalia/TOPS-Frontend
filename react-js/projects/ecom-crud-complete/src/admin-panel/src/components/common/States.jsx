export function EmptyState({
  icon = "bi-inbox",
  title = "Nothing here yet",
  hint,
  action,
}) {
  return (
    <div className="empty-state">
      <i className={`bi ${icon}`} />
      <div style={{ fontWeight: 600, color: "var(--text)" }}>{title}</div>
      {hint && <div style={{ fontSize: 12.8 }}>{hint}</div>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}

export function TableSkeleton({ rows = 5, cols = 5 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, r) => (
        <tr key={r} className="skeleton-row">
          {Array.from({ length: cols }).map((__, c) => (
            <td key={c}>
              <div
                className="skeleton-bar"
                style={{ width: c === 0 ? "70%" : "50%" }}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export function ErrorBanner({ message }) {
  if (!message) return null;
  return (
    <div
      className="alert d-flex align-items-center gap-2"
      style={{
        background: "var(--danger-soft)",
        color: "var(--danger)",
        border: "none",
        fontSize: 13.5,
      }}
    >
      <i className="bi bi-exclamation-triangle" />
      <span>{message}</span>
    </div>
  );
}

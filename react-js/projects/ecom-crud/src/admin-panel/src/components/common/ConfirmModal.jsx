export default function ConfirmModal({
  show,
  title = "Are you sure?",
  body,
  confirmLabel = "Confirm",
  danger = true,
  busy = false,
  onConfirm,
  onCancel,
}) {
  if (!show) return null;
  return (
    <div
      className="modal d-block"
      style={{ background: "rgba(11,22,38,0.45)" }}
      tabIndex={-1}
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal-content"
          style={{
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
          }}
        >
          <div
            className="modal-header"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <h5 className="modal-title">{title}</h5>
            <button className="btn-close" onClick={onCancel} disabled={busy} />
          </div>
          <div className="modal-body">
            <p
              className="mb-0"
              style={{ color: "var(--text-muted)", fontSize: 13.8 }}
            >
              {body}
            </p>
          </div>
          <div
            className="modal-footer"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <button
              className="btn btn-sm btn-outline-console"
              onClick={onCancel}
              disabled={busy}
            >
              Cancel
            </button>
            <button
              className={`btn btn-sm ${danger ? "btn-danger" : "btn-accent"}`}
              onClick={onConfirm}
              disabled={busy}
            >
              {busy ? "Working…" : confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

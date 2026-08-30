export default function AdminPageLoader() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading…</span>
      </div>
    </div>
  );
}

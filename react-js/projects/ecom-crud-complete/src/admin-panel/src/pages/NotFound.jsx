import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: "70vh" }}
    >
      <div
        className="display-font"
        style={{ fontSize: 56, fontWeight: 700, color: "var(--navy-900)" }}
      >
        404
      </div>
      <p style={{ color: "var(--text-muted)" }}>
        That page doesn't exist in the console.
      </p>
      <Link to="/" className="btn btn-accent mt-2">
        Back to dashboard
      </Link>
    </div>
  );
}

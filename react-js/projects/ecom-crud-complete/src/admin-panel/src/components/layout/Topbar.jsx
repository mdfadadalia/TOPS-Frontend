import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../../store/slices/authSlice.js";

export default function Topbar({ title, crumb, onMenuClick }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const initials = (user?.name || "Admin")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate("/admin/login");
  };

  return (
    <header className="topbar">
      <button
        className="btn btn-sm btn-outline-console d-lg-none"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <i className="bi bi-list" />
      </button>
      <div>
        {crumb && <div className="crumb">{crumb}</div>}
        <div className="page-title">{title}</div>
      </div>
      <div className="ms-auto dropdown">
        <button
          type="button"
          className="btn btn-sm d-flex align-items-center gap-2"
          style={{ border: "1px solid var(--border)" }}
          data-bs-toggle="dropdown"
        >
          <span
            className="d-inline-flex align-items-center justify-content-center"
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "var(--navy-800)",
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            {initials}
          </span>
          <span style={{ fontSize: 13.5, fontWeight: 500 }}>{user?.name || "Admin"}</span>
          <i className="bi bi-chevron-down" style={{ fontSize: 10 }} />
        </button>
        <ul className="dropdown-menu dropdown-menu-end mt-2">
          <li>
            <button
              className="dropdown-item"
              onClick={() => navigate("/admin/profile")}
            >
              <i className="bi bi-person me-2" /> My profile
            </button>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button
              className="dropdown-item text-danger"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-2" /> Log out
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

import { NavLink } from "react-router-dom";

const NAV_GROUPS = [
  {
    label: "Overview",
    items: [{ to: "/admin", icon: "bi-grid-1x2", label: "Dashboard", end: true }],
  },
  {
    label: "Catalog",
    items: [
      { to: "/admin/categories", icon: "bi-tags", label: "Categories" },
      { to: "/admin/products", icon: "bi-box-seam", label: "Products" },
    ],
  },
  {
    label: "Sales",
    items: [
      { to: "/admin/orders", icon: "bi-receipt", label: "Orders" },
      { to: "/admin/payments", icon: "bi-credit-card", label: "Payments" },
    ],
  },
  {
    label: "People",
    items: [{ to: "/admin/users", icon: "bi-people", label: "Users" }],
  },
];

export default function Sidebar({ open, onNavigate }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-brand">
        <div className="mark">CC</div>
        <div>
          <div className="name">Commerce Console</div>
          <div className="sub">Admin</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {NAV_GROUPS.map((group) => (
          <div key={group.label}>
            <div className="nav-section-label">{group.label}</div>
            {group.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `sidebar-link${isActive ? " active" : ""}`
                }
              >
                <i className={`bi ${item.icon}`} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}

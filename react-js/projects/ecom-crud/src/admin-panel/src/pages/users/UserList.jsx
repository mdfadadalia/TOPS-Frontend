import { Link } from "react-router-dom";
import StatusPill from "../../components/common/StatusPill.jsx";

// Static preview records keep this UI populated until user data is connected.
const users = [
  {
    id: "u-1001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "customer",
    active: true,
    joined: "10 Aug 2026",
  },
  {
    id: "u-1002",
    name: "Priya Patel",
    email: "priya@example.com",
    role: "customer",
    active: true,
    joined: "08 Aug 2026",
  },
  {
    id: "u-1003",
    name: "Amit Shah",
    email: "amit@example.com",
    role: "customer",
    active: false,
    joined: "02 Aug 2026",
  },
  {
    id: "u-1004",
    name: "Neha Mehta",
    email: "neha@example.com",
    role: "customer",
    active: true,
    joined: "28 Jul 2026",
  },
  {
    id: "u-1005",
    name: "Admin User",
    email: "admin@ecommerce.com",
    role: "admin",
    active: true,
    joined: "01 Jul 2026",
  },
];
export default function UserList() {
  return (
    <div>
      <div className="panel">
        <div className="panel-header">
          <h2>Users</h2>
          <input
            className="form-control form-control-sm"
            placeholder="Search by name or email…"
            style={{ width: 220 }}
          />
        </div>
        <div className="table-responsive">
          <table className="table-console">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>
                    <Link
                      to={`/admin/users/${u.id}`}
                      style={{ fontWeight: 500, color: "var(--text)" }}
                    >
                      {u.name}
                    </Link>
                  </td>
                  <td style={{ color: "var(--text-muted)" }}>{u.email}</td>
                  <td>
                    <span className="pill pill-neutral">{u.role}</span>
                  </td>
                  <td>
                    <StatusPill value={u.active ? "active" : "inactive"} />
                  </td>
                  <td style={{ color: "var(--text-muted)", fontSize: 12.5 }}>
                    {u.joined}
                  </td>
                  <td className="text-end">
                    <Link
                      to={`/admin/users/${u.id}`}
                      className="btn btn-sm btn-outline-console"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

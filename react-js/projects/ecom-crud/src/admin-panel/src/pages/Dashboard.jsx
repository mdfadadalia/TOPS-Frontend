import { Link } from "react-router-dom";
import StatusPill from "../components/common/StatusPill.jsx";

const stats = [
  ["Users", "2,486", "bi-people", "info"],
  ["Products", "1,284", "bi-box-seam", "success"],
  ["Orders", "8,642", "bi-receipt", "warning"],
  ["Revenue", "₹24,86,540", "bi-currency-rupee", "accent"],
];

const orders = [
  {
    id: "ORD-10482",
    customer: "Rahul Sharma",
    status: "delivered",
    payment: "paid",
    total: 2499,
    date: "14 Aug 2026",
  },
  {
    id: "ORD-10481",
    customer: "Priya Patel",
    status: "processing",
    payment: "paid",
    total: 5799,
    date: "14 Aug 2026",
  },
  {
    id: "ORD-10480",
    customer: "Amit Shah",
    status: "shipped",
    payment: "paid",
    total: 1299,
    date: "13 Aug 2026",
  },
  {
    id: "ORD-10479",
    customer: "Neha Mehta",
    status: "pending",
    payment: "pending",
    total: 899,
    date: "13 Aug 2026",
  },
  {
    id: "ORD-10478",
    customer: "Karan Joshi",
    status: "delivered",
    payment: "paid",
    total: 7499,
    date: "12 Aug 2026",
  },
];

const money = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export default function Dashboard() {
  const bg = {
    info: "var(--info-soft)",
    success: "var(--success-soft)",
    warning: "var(--warning-soft)",
    accent: "var(--accent-soft)",
  };

  const fg = {
    info: "var(--info)",
    success: "var(--success)",
    warning: "var(--warning)",
    accent: "var(--accent-600)",
  };

  return (
    <div>
      <div className="row g-3 mb-4">
        {stats.map(([label, value, icon, tone]) => (
          <div className="col-6 col-xl-3" key={label}>
            <div className="stat-card">
              <div
                className="stat-icon"
                style={{
                  background: bg[tone],
                  color: fg[tone],
                }}
              >
                <i className={`bi ${icon}`} />
              </div>

              <div className="stat-label">{label}</div>

              <div className="stat-value">{value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="panel">
        <div className="panel-header">
          <h2>Recent orders</h2>

          <Link to="/admin/orders" className="btn btn-sm btn-outline-console">
            View all orders
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table-console">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Total</th>
                <th>Placed</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>
                    <Link
                      to={`/admin/orders/${o.id}`}
                      className="mono"
                      style={{ fontSize: 12.5 }}
                    >
                      #{o.id}
                    </Link>
                  </td>

                  <td>{o.customer}</td>

                  <td>
                    <StatusPill value={o.status} />
                  </td>

                  <td>
                    <StatusPill value={o.payment} />
                  </td>

                  <td className="mono">{money(o.total)}</td>

                  <td
                    style={{
                      color: "var(--text-muted)",
                      fontSize: 12.5,
                    }}
                  >
                    {o.date}
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

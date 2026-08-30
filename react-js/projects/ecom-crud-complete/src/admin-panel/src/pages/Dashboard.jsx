import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StatusPill from "../components/common/StatusPill.jsx";
import { ErrorBanner } from "../components/common/States.jsx";
import { fetchAdminOrders, fetchDashboard } from "../../../store/slices/adminSlice.js";
import { formatCurrency, formatDate } from "../../../utils/normalize.js";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.admin.dashboard);
  const { items: orders } = useSelector((state) => state.admin.orders);

  useEffect(() => {
    dispatch(fetchDashboard());
    dispatch(fetchAdminOrders({ page: 1, limit: 5 }));
  }, [dispatch]);

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

  const stats = [
    ["Users", data?.totalUsers ?? data?.usersCount ?? "—", "bi-people", "info"],
    ["Products", data?.totalProducts ?? data?.productsCount ?? "—", "bi-box-seam", "success"],
    ["Orders", data?.totalOrders ?? data?.ordersCount ?? "—", "bi-receipt", "warning"],
    [
      "Revenue",
      data?.totalRevenue != null ? formatCurrency(data.totalRevenue) : "—",
      "bi-currency-rupee",
      "accent",
    ],
  ];

  return (
    <div>
      <ErrorBanner message={error} />
      <div className="row g-3 mb-4">
        {stats.map(([label, value, icon, tone]) => (
          <div className="col-6 col-xl-3" key={label}>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: bg[tone], color: fg[tone] }}>
                <i className={`bi ${icon}`} />
              </div>
              <div className="stat-label">{label}</div>
              <div className="stat-value">{loading && value === "—" ? "…" : value}</div>
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
              {orders.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", color: "var(--text-muted)" }}>
                    {loading ? "Loading…" : "No orders yet."}
                  </td>
                </tr>
              )}
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>
                    <Link to={`/admin/orders/${o.id}`} className="mono" style={{ fontSize: 12.5 }}>
                      #{o.orderNumber}
                    </Link>
                  </td>
                  <td>{o.shippingAddress?.fullName || o.customer?.name || '—'}</td>
                  <td>
                    <StatusPill value={o.status} />
                  </td>
                  <td>
                    <StatusPill value={o.paymentStatus} />
                  </td>
                  <td className="mono">{formatCurrency(o.total)}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: 12.5 }}>{formatDate(o.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

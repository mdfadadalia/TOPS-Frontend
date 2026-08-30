import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import StatusPill from "../../components/common/StatusPill.jsx";

// Static preview records keep this UI populated until order data is connected.
const orders = [
  {
    id: "ORD-10482",
    customer: "Rahul Sharma",
    items: 3,
    status: "delivered",
    payment: "paid",
    total: 2499,
    date: "14 Aug 2026",
  },
  {
    id: "ORD-10481",
    customer: "Priya Patel",
    items: 2,
    status: "processing",
    payment: "paid",
    total: 5799,
    date: "14 Aug 2026",
  },
  {
    id: "ORD-10480",
    customer: "Amit Shah",
    items: 1,
    status: "shipped",
    payment: "paid",
    total: 1299,
    date: "13 Aug 2026",
  },
  {
    id: "ORD-10479",
    customer: "Neha Mehta",
    items: 1,
    status: "pending",
    payment: "pending",
    total: 899,
    date: "13 Aug 2026",
  },
  {
    id: "ORD-10478",
    customer: "Karan Joshi",
    items: 4,
    status: "delivered",
    payment: "paid",
    total: 7499,
    date: "12 Aug 2026",
  },
  {
    id: "ORD-10477",
    customer: "Riya Desai",
    items: 2,
    status: "cancelled",
    payment: "refunded",
    total: 1599,
    date: "11 Aug 2026",
  },
];
const money = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
export default function OrderList() {
  const [status, setStatus] = useState("");
  const items = useMemo(
    () => (status ? orders.filter((o) => o.status === status) : orders),
    [status],
  );
  return (
    <div>
      <div className="panel">
        <div className="panel-header">
          <h2>Orders</h2>
          <select
            className="form-select form-select-sm"
            style={{ width: 180 }}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All statuses</option>
            {["pending", "processing", "shipped", "delivered", "cancelled"].map(
              (s) => (
                <option key={s}>{s[0].toUpperCase() + s.slice(1)}</option>
              ),
            )}
          </select>
        </div>
        <div className="table-responsive">
          <table className="table-console">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Total</th>
                <th>Placed</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((o) => (
                <tr key={o.id}>
                  <td className="mono">#{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.items}</td>
                  <td>
                    <StatusPill value={o.status} />
                  </td>
                  <td>
                    <StatusPill value={o.payment} />
                  </td>
                  <td className="mono">{money(o.total)}</td>
                  <td style={{ color: "var(--text-muted)", fontSize: 12.5 }}>
                    {o.date}
                  </td>
                  <td className="text-end">
                    <Link
                      to={`/admin/orders/${o.id}`}
                      className="btn btn-sm btn-outline-console"
                    >
                      View <i className="bi bi-arrow-right ms-1" />
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

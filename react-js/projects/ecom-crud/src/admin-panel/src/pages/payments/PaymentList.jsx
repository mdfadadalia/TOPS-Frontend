import { Link } from "react-router-dom";
import StatusPill from "../../components/common/StatusPill.jsx";

// Static preview records keep this UI populated until payment data is connected.
const payments = [
  {
    id: "PAY-90821",
    order: "ORD-10482",
    razor: "pay_Qx821",
    amount: 2499,
    status: "paid",
    date: "14 Aug 2026, 10:42 AM",
  },
  {
    id: "PAY-90820",
    order: "ORD-10481",
    razor: "pay_Qx820",
    amount: 5799,
    status: "paid",
    date: "14 Aug 2026, 09:18 AM",
  },
  {
    id: "PAY-90819",
    order: "ORD-10480",
    razor: "pay_Qx819",
    amount: 1299,
    status: "paid",
    date: "13 Aug 2026, 05:36 PM",
  },
  {
    id: "PAY-90818",
    order: "ORD-10479",
    razor: "pay_Qx818",
    amount: 899,
    status: "pending",
    date: "13 Aug 2026, 04:20 PM",
  },
  {
    id: "PAY-90817",
    order: "ORD-10477",
    razor: "pay_Qx817",
    amount: 1599,
    status: "refunded",
    date: "11 Aug 2026, 02:11 PM",
  },
];
const money = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(n);
export default function PaymentList() {
  return (
    <div>
      <div className="panel">
        <div className="panel-header">
          <h2>Payments</h2>
        </div>
        <div className="table-responsive">
          <table className="table-console">
            <thead>
              <tr>
                <th>Payment</th>
                <th>Order</th>
                <th>Razorpay payment ID</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id}>
                  <td className="mono">#{p.id}</td>
                  <td>
                    <Link to={`/admin/orders/${p.order}`} className="mono">
                      #{p.order}
                    </Link>
                  </td>
                  <td className="mono" style={{ fontSize: 12 }}>
                    {p.razor}
                  </td>
                  <td className="mono">{money(p.amount)}</td>
                  <td>
                    <StatusPill value={p.status} />
                  </td>
                  <td style={{ color: "var(--text-muted)", fontSize: 12.5 }}>
                    {p.date}
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

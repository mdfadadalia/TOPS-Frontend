import { useParams, useNavigate } from "react-router-dom";
import StatusPill from "../../components/common/StatusPill.jsx";
import OrderPipeline from "../../components/common/OrderPipeline.jsx";

// Static preview record used while the order-detail API is not connected.
const order = {
  id: "ORD-10482",
  status: "delivered",
  payment: "paid",
  date: "14 Aug 2026, 10:42 AM",
  customer: "Rahul Sharma",
  email: "rahul@example.com",
  phone: "+91 98765 43210",
  address: "12 Sunrise Avenue, Ahmedabad, Gujarat 380015, India",
  method: "Razorpay",
  subtotal: 2299,
  tax: 200,
  shipping: 0,
  total: 2499,
  items: [
    { name: "Wireless Headphones", price: 1299, qty: 1 },
    { name: "Laptop Sleeve", price: 1000, qty: 1 },
  ],
};
const money = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(n);
export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn btn-sm btn-outline-console mb-3"
        onClick={() => navigate("/orders")}
      >
        <i className="bi bi-arrow-left me-1" /> Back to orders
      </button>
      <div className="panel mb-3">
        <div className="panel-body">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
            <div>
              <div
                className="mono"
                style={{ fontSize: 13, color: "var(--text-muted)" }}
              >
                Order #{order.id}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-faint)" }}>
                Placed {order.date}
              </div>
            </div>
            <div className="d-flex gap-2">
              <StatusPill value={order.status} />
              <StatusPill value={order.payment} />
            </div>
          </div>
          <OrderPipeline status={order.status} />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="panel mb-3">
            <div className="panel-header">
              <h2>Items</h2>
            </div>
            <div className="table-responsive">
              <table className="table-console">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-end">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((i) => (
                    <tr key={i.name}>
                      <td>{i.name}</td>
                      <td className="mono">{money(i.price)}</td>
                      <td>{i.qty}</td>
                      <td className="text-end mono">
                        {money(i.price * i.qty)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="panel-body pt-0">
              <div className="d-flex justify-content-end">
                <div style={{ width: 260, fontSize: 13.5 }}>
                  {[
                    ["Subtotal", order.subtotal],
                    ["Tax", order.tax],
                    ["Shipping", order.shipping],
                    ["Grand total", order.total],
                  ].map(([l, v], i) => (
                    <div
                      key={l}
                      className="d-flex justify-content-between py-1"
                      style={
                        i === 3
                          ? {
                              borderTop: "1px solid var(--border)",
                              fontWeight: 700,
                              marginTop: 4,
                              paddingTop: 8,
                            }
                          : {}
                      }
                    >
                      <span
                        style={{
                          color: i === 3 ? "var(--text)" : "var(--text-muted)",
                        }}
                      >
                        {l}
                      </span>
                      <span className="mono">{money(v)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="panel mb-3">
            <div className="panel-header">
              <h2>Customer</h2>
            </div>
            <div className="panel-body" style={{ fontSize: 13.5 }}>
              <strong>{order.customer}</strong>
              <div className="text-muted">{order.email}</div>
              <div className="text-muted">{order.phone}</div>
            </div>
          </div>
          <div className="panel mb-3">
            <div className="panel-header">
              <h2>Shipping address</h2>
            </div>
            <div
              className="panel-body"
              style={{ fontSize: 13.5, lineHeight: 1.6 }}
            >
              {order.address}
            </div>
          </div>
          <div className="panel">
            <div className="panel-header">
              <h2>Payment</h2>
            </div>
            <div className="panel-body" style={{ fontSize: 13.5 }}>
              <div className="d-flex justify-content-between">
                <span className="text-muted">Method</span>
                <span>{order.method}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span className="text-muted">Status</span>
                <StatusPill value={order.payment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

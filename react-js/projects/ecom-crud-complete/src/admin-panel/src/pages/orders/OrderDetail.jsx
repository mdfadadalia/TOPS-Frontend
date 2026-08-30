import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StatusPill from "../../components/common/StatusPill.jsx";
import OrderPipeline from "../../components/common/OrderPipeline.jsx";
import { ErrorBanner } from "../../components/common/States.jsx";
import { fetchAdminOrders, updateAdminOrderStatus } from "../../../../store/slices/adminSlice.js";
import { formatCurrency, formatDate } from "../../../../utils/normalize.js";

const STATUSES = ["pending", "processing", "shipped", "delivered", "cancelled"];

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, updatingId, error } = useSelector((state) => state.admin.orders);
  const order = items.find((o) => o.id === id);
  const [nextStatus, setNextStatus] = useState("");

  useEffect(() => {
    if (!order) dispatch(fetchAdminOrders({ page: 1, limit: 50 }));
  }, [dispatch, order]);

  useEffect(() => {
    if (order) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrating status selector from fetched order
      setNextStatus(order.status);
    }
  }, [order]);

  if (!order) {
    return (
      <div>
        <button className="btn btn-sm btn-outline-console mb-3" onClick={() => navigate("/admin/orders")}>
          <i className="bi bi-arrow-left me-1" /> Back to orders
        </button>
        <ErrorBanner message={error || "Loading order…"} />
      </div>
    );
  }

  const saveStatus = () => {
    if (nextStatus && nextStatus !== order.status) {
      dispatch(updateAdminOrderStatus({ id: order.id, status: nextStatus }));
    }
  };

  return (
    <div>
      <button className="btn btn-sm btn-outline-console mb-3" onClick={() => navigate("/admin/orders")}>
        <i className="bi bi-arrow-left me-1" /> Back to orders
      </button>
      <ErrorBanner message={error} />
      <div className="panel mb-3">
        <div className="panel-body">
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
            <div>
              <div className="mono" style={{ fontSize: 13, color: "var(--text-muted)" }}>
                Order #{order.orderNumber}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-faint)" }}>Placed {formatDate(order.createdAt)}</div>
            </div>
            <div className="d-flex gap-2">
              <StatusPill value={order.status} />
              <StatusPill value={order.paymentStatus} />
            </div>
          </div>
          <OrderPipeline status={order.status} />
          {order.status !== "cancelled" && (
            <div className="d-flex gap-2 mt-3 align-items-center">
              <select className="form-select form-select-sm" style={{ width: 180 }} value={nextStatus} onChange={(e) => setNextStatus(e.target.value)}>
                {STATUSES.map((s) => (
                  <option key={s} value={s}>{s[0].toUpperCase() + s.slice(1)}</option>
                ))}
              </select>
              <button className="btn btn-sm btn-accent" disabled={updatingId === order.id} onClick={saveStatus}>
                {updatingId === order.id ? "Updating…" : "Update status"}
              </button>
            </div>
          )}
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
                    <tr key={i.id || i.name}>
                      <td>{i.name}</td>
                      <td className="mono">{formatCurrency(i.price)}</td>
                      <td>{i.quantity}</td>
                      <td className="text-end mono">{formatCurrency(i.price * i.quantity)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="panel-body pt-0">
              <div className="d-flex justify-content-end">
                <div style={{ width: 260, fontSize: 13.5 }}>
                  {[
                    ["Subtotal", order.subtotal || order.total - order.shippingFee],
                    ["Shipping", order.shippingFee],
                    ["Grand total", order.total],
                  ].map(([l, v], i) => (
                    <div
                      key={l}
                      className="d-flex justify-content-between py-1"
                      style={i === 2 ? { borderTop: "1px solid var(--border)", fontWeight: 700, marginTop: 4, paddingTop: 8 } : {}}
                    >
                      <span style={{ color: i === 2 ? "var(--text)" : "var(--text-muted)" }}>{l}</span>
                      <span className="mono">{formatCurrency(v)}</span>
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
              <strong>{order.shippingAddress?.fullName || order.customer?.name || '—'}</strong>
              <div className="text-muted">{order.shippingAddress?.email || order.customer?.email}</div>
              <div className="text-muted">{order.shippingAddress?.phone}</div>
            </div>
          </div>
          <div className="panel mb-3">
            <div className="panel-header">
              <h2>Shipping address</h2>
            </div>
            <div className="panel-body" style={{ fontSize: 13.5, lineHeight: 1.6 }}>
              {order.shippingAddress
                ? [order.shippingAddress.addressLine1, order.shippingAddress.addressLine2, order.shippingAddress.city, order.shippingAddress.state, order.shippingAddress.postalCode, order.shippingAddress.country]
                    .filter(Boolean)
                    .join(', ')
                : 'No address on file.'}
            </div>
          </div>
          <div className="panel">
            <div className="panel-header">
              <h2>Payment</h2>
            </div>
            <div className="panel-body" style={{ fontSize: 13.5 }}>
              <div className="d-flex justify-content-between">
                <span className="text-muted">Method</span>
                <span style={{ textTransform: 'capitalize' }}>{order.paymentMethod}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span className="text-muted">Status</span>
                <StatusPill value={order.paymentStatus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

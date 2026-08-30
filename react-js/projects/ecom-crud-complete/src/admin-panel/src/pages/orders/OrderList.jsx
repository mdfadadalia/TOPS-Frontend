import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StatusPill from "../../components/common/StatusPill.jsx";
import Pagination from "../../components/common/Pagination.jsx";
import { EmptyState, TableSkeleton, ErrorBanner } from "../../components/common/States.jsx";
import { fetchAdminOrders } from "../../../../store/slices/adminSlice.js";
import { formatCurrency, formatDate } from "../../../../utils/normalize.js";

const STATUSES = ["pending", "processing", "shipped", "delivered", "cancelled"];

export default function OrderList() {
  const dispatch = useDispatch();
  const { items, pagination, loading, error } = useSelector((state) => state.admin.orders);
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdminOrders({ status: status || undefined, page, limit: 10 }));
  }, [dispatch, status, page]);

  return (
    <div>
      <div className="panel">
        <div className="panel-header">
          <h2>Orders</h2>
          <select
            className="form-select form-select-sm"
            style={{ width: 180 }}
            value={status}
            onChange={(e) => { setStatus(e.target.value); setPage(1); }}
          >
            <option value="">All statuses</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s[0].toUpperCase() + s.slice(1)}</option>
            ))}
          </select>
        </div>
        <ErrorBanner message={error} />
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
              {loading ? (
                <TableSkeleton rows={6} cols={8} />
              ) : (
                items.map((o) => (
                  <tr key={o.id}>
                    <td className="mono">#{o.orderNumber}</td>
                    <td>{o.customer?.name || o.shippingAddress?.fullName || '—'}</td>
                    <td>{o.items.length}</td>
                    <td>
                      <StatusPill value={o.status} />
                    </td>
                    <td>
                      <StatusPill value={o.paymentStatus} />
                    </td>
                    <td className="mono">{formatCurrency(o.total)}</td>
                    <td style={{ color: "var(--text-muted)", fontSize: 12.5 }}>{formatDate(o.createdAt)}</td>
                    <td className="text-end">
                      <Link to={`/admin/orders/${o.id}`} className="btn btn-sm btn-outline-console">
                        View <i className="bi bi-arrow-right ms-1" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!loading && items.length === 0 && <EmptyState title="No orders found" hint="Orders will appear here once customers start checking out." />}
        {pagination?.totalPages > 1 && (
          <Pagination page={page} totalPages={pagination.totalPages} onChange={setPage} />
        )}
      </div>
    </div>
  );
}

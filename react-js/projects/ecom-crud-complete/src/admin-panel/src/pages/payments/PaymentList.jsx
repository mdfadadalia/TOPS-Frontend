import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StatusPill from "../../components/common/StatusPill.jsx";
import Pagination from "../../components/common/Pagination.jsx";
import { EmptyState, TableSkeleton, ErrorBanner } from "../../components/common/States.jsx";
import { fetchAdminPayments } from "../../../../store/slices/adminSlice.js";
import { formatCurrency, formatDate } from "../../../../utils/normalize.js";

export default function PaymentList() {
  const dispatch = useDispatch();
  const { items, pagination, loading, error } = useSelector((state) => state.admin.payments);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdminPayments({ page, limit: 15 }));
  }, [dispatch, page]);

  return (
    <div>
      <div className="panel">
        <div className="panel-header">
          <h2>Payments</h2>
        </div>
        <ErrorBanner message={error} />
        <div className="table-responsive">
          <table className="table-console">
            <thead>
              <tr>
                <th>Payment</th>
                <th>Order</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <TableSkeleton rows={6} cols={6} />
              ) : (
                items.map((p) => (
                  <tr key={p.id}>
                    <td className="mono">#{p.id.slice(-8)}</td>
                    <td>
                      <Link to={`/admin/orders/${p.orderId}`} className="mono">
                        #{p.orderId.slice(-8)}
                      </Link>
                    </td>
                    <td className="mono" style={{ fontSize: 12 }}>{p.transactionId || '—'}</td>
                    <td className="mono">{formatCurrency(p.amount)}</td>
                    <td>
                      <StatusPill value={p.status} />
                    </td>
                    <td style={{ color: "var(--text-muted)", fontSize: 12.5 }}>{formatDate(p.createdAt)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!loading && items.length === 0 && <EmptyState title="No payments yet" hint="Payments will appear here as customers pay online." />}
        {pagination?.totalPages > 1 && (
          <Pagination page={page} totalPages={pagination.totalPages} onChange={setPage} />
        )}
      </div>
    </div>
  );
}

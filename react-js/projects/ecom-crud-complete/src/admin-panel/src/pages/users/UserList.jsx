import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StatusPill from "../../components/common/StatusPill.jsx";
import Pagination from "../../components/common/Pagination.jsx";
import { EmptyState, TableSkeleton, ErrorBanner } from "../../components/common/States.jsx";
import { fetchAdminUsers } from "../../../../store/slices/adminSlice.js";
import { formatDate } from "../../../../utils/normalize.js";

export default function UserList() {
  const dispatch = useDispatch();
  const { items, pagination, loading, error } = useSelector((state) => state.admin.users);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(fetchAdminUsers({ search: search || undefined, page, limit: 15 }));
    }, 300);
    return () => clearTimeout(timeout);
  }, [dispatch, search, page]);

  return (
    <div>
      <div className="panel">
        <div className="panel-header">
          <h2>Users</h2>
          <input
            className="form-control form-control-sm"
            placeholder="Search by name or email…"
            style={{ width: 220 }}
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>
        <ErrorBanner message={error} />
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
              {loading ? (
                <TableSkeleton rows={6} cols={6} />
              ) : (
                items.map((u) => (
                  <tr key={u.id}>
                    <td>
                      <Link to={`/admin/users/${u.id}`} style={{ fontWeight: 500, color: "var(--text)" }}>
                        {u.name}
                      </Link>
                    </td>
                    <td style={{ color: "var(--text-muted)" }}>{u.email}</td>
                    <td>
                      <span className="pill pill-neutral">{u.role}</span>
                    </td>
                    <td>
                      <StatusPill value={u.status} />
                    </td>
                    <td style={{ color: "var(--text-muted)", fontSize: 12.5 }}>{formatDate(u.createdAt)}</td>
                    <td className="text-end">
                      <Link to={`/admin/users/${u.id}`} className="btn btn-sm btn-outline-console">
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!loading && items.length === 0 && <EmptyState title="No users found" hint="Try a different search term." />}
        {pagination?.totalPages > 1 && (
          <Pagination page={page} totalPages={pagination.totalPages} onChange={setPage} />
        )}
      </div>
    </div>
  );
}

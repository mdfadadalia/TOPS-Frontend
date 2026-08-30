import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StatusPill from "../../components/common/StatusPill.jsx";
import ConfirmModal from "../../components/common/ConfirmModal.jsx";
import { EmptyState, TableSkeleton, ErrorBanner } from "../../components/common/States.jsx";
import { fetchCategories, removeCategory } from "../../../../store/slices/categorySlice.js";
import { withCacheBust } from "../../../../utils/imageUrl.js";

export default function CategoryList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.categories);
  const [search, setSearch] = useState("");
  const [pendingDelete, setPendingDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const filtered = useMemo(
    () => items.filter((c) => (c.name + " " + c.slug).toLowerCase().includes(search.toLowerCase())),
    [items, search],
  );

  const confirmDelete = async () => {
    if (!pendingDelete) return;
    await dispatch(removeCategory(pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <div>
      <div className="panel">
        <div className="panel-header">
          <h2>Categories</h2>
          <div className="d-flex gap-2">
            <input
              className="form-control form-control-sm"
              placeholder="Search categories…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: 200 }}
            />
            <Link to="/admin/categories/new" className="btn btn-sm btn-accent">
              <i className="bi bi-plus-lg me-1" /> New category
            </Link>
          </div>
        </div>
        <ErrorBanner message={error} />
        <div className="table-responsive">
          <table className="table-console">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Slug</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <TableSkeleton rows={5} cols={5} />
              ) : (
                filtered.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <img src={withCacheBust(c.image, c.updatedAt)} alt="" className="row-thumb" />
                    </td>
                    <td style={{ fontWeight: 500 }}>{c.name}</td>
                    <td className="mono" style={{ fontSize: 12.5, color: "var(--text-muted)" }}>
                      {c.slug}
                    </td>
                    <td>
                      <StatusPill value={c.status} />
                    </td>
                    <td className="text-end">
                      <Link to={`/admin/categories/${c.id}/edit`} className="btn btn-sm btn-outline-console me-1">
                        <i className="bi bi-pencil" />
                      </Link>
                      <button type="button" className="btn btn-sm btn-outline-console" onClick={() => setPendingDelete(c)}>
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!loading && filtered.length === 0 && <EmptyState title="No categories found" hint="Create your first category to get started." />}
      </div>

      <ConfirmModal
        show={Boolean(pendingDelete)}
        title="Delete category"
        body={`Are you sure you want to delete "${pendingDelete?.name}"? Products in this category won't be deleted.`}
        confirmLabel="Delete"
        onConfirm={confirmDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </div>
  );
}

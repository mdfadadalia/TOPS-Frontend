import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StatusPill from "../../components/common/StatusPill.jsx";
import ConfirmModal from "../../components/common/ConfirmModal.jsx";
import Pagination from "../../components/common/Pagination.jsx";
import { EmptyState, TableSkeleton, ErrorBanner } from "../../components/common/States.jsx";
import { fetchProducts, removeProduct } from "../../../../store/slices/productSlice.js";
import { formatCurrency } from "../../../../utils/normalize.js";
import { withCacheBust } from "../../../../utils/imageUrl.js";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, pagination, loading, error } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pendingDelete, setPendingDelete] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(fetchProducts({ search: search || undefined, page, limit: 10 }));
    }, 300);
    return () => clearTimeout(timeout);
  }, [dispatch, search, page]);

  const confirmDelete = async () => {
    if (!pendingDelete) return;
    await dispatch(removeProduct(pendingDelete.id));
    setPendingDelete(null);
  };

  return (
    <div>
      <div className="panel">
        <div className="panel-header">
          <h2>Products</h2>
          <div className="d-flex gap-2">
            <input
              className="form-control form-control-sm"
              placeholder="Search products…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              style={{ width: 220 }}
            />
            <Link to="/admin/products/new" className="btn btn-sm btn-accent">
              <i className="bi bi-plus-lg me-1" /> New product
            </Link>
          </div>
        </div>

        <ErrorBanner message={error} />
        <div className="table-responsive">
          <table className="table-console">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <TableSkeleton rows={5} cols={8} />
              ) : (
                items.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <img src={withCacheBust(p.images?.[0], p.updatedAt)} alt="" className="row-thumb" />
                    </td>
                    <td style={{ fontWeight: 500 }}>{p.name}</td>
                    <td className="mono">{p.sku || '—'}</td>
                    <td>{p.category || '—'}</td>
                    <td className="mono">{formatCurrency(p.price)}</td>
                    <td>{p.stock}</td>
                    <td>
                      <StatusPill value={p.status} />
                    </td>
                    <td className="text-end">
                      <Link
                        to={`/admin/products/${p.id}/edit`}
                        className="btn btn-sm btn-outline-console me-1"
                      >
                        <i className="bi bi-pencil" />
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-console"
                        onClick={() => setPendingDelete(p)}
                      >
                        <i className="bi bi-trash" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!loading && items.length === 0 && <EmptyState title="No products found" hint="Try adjusting your search or add a new product." />}
        {pagination?.totalPages > 1 && (
          <Pagination page={page} totalPages={pagination.totalPages} onChange={setPage} />
        )}
      </div>

      <ConfirmModal
        show={Boolean(pendingDelete)}
        title="Delete product"
        body={`Are you sure you want to delete "${pendingDelete?.name}"? This cannot be undone.`}
        confirmLabel="Delete"
        onConfirm={confirmDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </div>
  );
}

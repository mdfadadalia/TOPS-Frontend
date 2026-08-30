import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import StatusPill from "../../components/common/StatusPill.jsx";

// Static preview records keep this UI populated until category data is connected.
const initial = [
  {
    id: "cat-001",
    name: "Electronics",
    slug: "electronics",
    status: "active",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=120",
  },
  {
    id: "cat-002",
    name: "Fashion",
    slug: "fashion",
    status: "active",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=120",
  },
  {
    id: "cat-003",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    status: "active",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=120",
  },
  {
    id: "cat-004",
    name: "Footwear",
    slug: "footwear",
    status: "inactive",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120",
  },
  {
    id: "cat-005",
    name: "Beauty",
    slug: "beauty",
    status: "active",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120",
  },
];

export default function CategoryList() {
  const [search, setSearch] = useState("");
  const items = useMemo(
    () =>
      initial.filter((c) =>
        (c.name + " " + c.slug).toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );
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
              {items.map((c) => (
                <tr key={c.id}>
                  <td>
                    <img src={c.image} alt="" className="row-thumb" />
                  </td>
                  <td style={{ fontWeight: 500 }}>{c.name}</td>
                  <td
                    className="mono"
                    style={{ fontSize: 12.5, color: "var(--text-muted)" }}
                  >
                    {c.slug}
                  </td>
                  <td>
                    <StatusPill value={c.status} />
                  </td>
                  <td className="text-end">
                    <Link
                      to={`/admin/categories/${c.id}/edit`}
                      className="btn btn-sm btn-outline-console"
                    >
                      <i className="bi bi-pencil" />
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

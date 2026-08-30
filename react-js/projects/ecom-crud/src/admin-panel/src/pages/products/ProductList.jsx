import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import StatusPill from "../../components/common/StatusPill.jsx";

// Static preview records keep this UI populated until product data is connected.
const products = [
  {
    id: "p-1001",
    name: "Apple iPhone 15",
    sku: "IP15-128",
    category: "Electronics",
    price: 69999,
    stock: 24,
    status: "active",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=160",
  },
  {
    id: "p-1002",
    name: "Samsung Galaxy S24",
    sku: "SGS24-256",
    category: "Electronics",
    price: 74999,
    stock: 18,
    status: "active",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=160",
  },
  {
    id: "p-1003",
    name: "Nike Air Max",
    sku: "NAM-001",
    category: "Footwear",
    price: 8999,
    stock: 42,
    status: "active",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160",
  },
  {
    id: "p-1004",
    name: "Classic Denim Jacket",
    sku: "CDJ-101",
    category: "Fashion",
    price: 3499,
    stock: 7,
    status: "active",
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=160",
  },
  {
    id: "p-1005",
    name: "Mixer Grinder Pro",
    sku: "MGP-500",
    category: "Home & Kitchen",
    price: 4299,
    stock: 0,
    status: "inactive",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=160",
  },
];
const money = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
export default function ProductList() {
  const [search, setSearch] = useState("");
  const items = useMemo(
    () =>
      products.filter((p) =>
        (p.name + " " + p.sku + " " + p.category)
          .toLowerCase()
          .includes(search.toLowerCase()),
      ),
    [search],
  );
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
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: 220 }}
            />
            <Link to="/admin/products/new" className="btn btn-sm btn-accent">
              <i className="bi bi-plus-lg me-1" /> New product
            </Link>
          </div>
        </div>
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
              {items.map((p) => (
                <tr key={p.id}>
                  <td>
                    <img src={p.image} alt="" className="row-thumb" />
                  </td>
                  <td style={{ fontWeight: 500 }}>{p.name}</td>
                  <td className="mono">{p.sku}</td>
                  <td>{p.category}</td>
                  <td className="mono">{money(p.price)}</td>
                  <td>{p.stock}</td>
                  <td>
                    <StatusPill value={p.status} />
                  </td>
                  <td className="text-end">
                    <Link
                      to={`/admin/products/${p.id}/edit`}
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

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function ProductForm() {
  const { id } = useParams();
  const nav = useNavigate();
  const edit = !!id;
  const [name, setName] = useState(edit ? "Apple iPhone 15" : "");
  const [sku, setSku] = useState(edit ? "IP15-128" : "");
  const [price, setPrice] = useState(edit ? "69999" : "");
  const [stock, setStock] = useState(edit ? "24" : "");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        nav("/admin/products");
      }}
    >
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="panel">
            <div className="panel-header">
              <h2>{edit ? "Edit product" : "New product"}</h2>
            </div>
            <div className="panel-body">
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Product name</label>
                  <input
                    className="form-control"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Brand</label>
                  <input className="form-control" value="Apple" readOnly />
                </div>
                <div className="col-md-6">
                  <label className="form-label">SKU</label>
                  <input
                    className="form-control mono"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Price</label>
                  <div className="input-group">
                    <span className="input-group-text">₹</span>
                    <input
                      className="form-control"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Discount price</label>
                  <div className="input-group">
                    <span className="input-group-text">₹</span>
                    <input className="form-control" value="67999" readOnly />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Stock</label>
                  <input
                    className="form-control"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    defaultValue="Premium smartphone with advanced camera system and all-day battery life."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="panel mb-3">
            <div className="panel-header">
              <h2>Visibility</h2>
            </div>
            <div className="panel-body">
              <label className="form-label">Status</label>
              <select className="form-select">
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked
                  id="featured"
                />
                <label className="form-check-label" htmlFor="featured">
                  Show in "Featured"
                </label>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="panel-header">
              <h2>Images</h2>
              <span style={{ fontSize: 11.5, color: "var(--text-muted)" }}>
                1/5
              </span>
            </div>
            <div className="panel-body">
              <div className="thumb-upload" style={{ aspectRatio: "1/1" }}>
                <img
                  src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400"
                  alt="product"
                />
              </div>
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button type="submit" className="btn btn-accent flex-fill">
              {edit ? "Save changes" : "Create product"}
            </button>
            <button
              type="button"
              className="btn btn-outline-console"
              onClick={() => nav("/admin/products")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

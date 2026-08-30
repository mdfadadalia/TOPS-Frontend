import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function CategoryForm() {
  const { id } = useParams();
  const nav = useNavigate();
  const edit = !!id;
  const [name, setName] = useState(edit ? "Electronics" : "");
  const [description, setDescription] = useState(
    edit ? "Mobiles, laptops and accessories" : "",
  );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        nav("/admin/categories");
      }}
    >
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="panel">
            <div className="panel-header">
              <h2>{edit ? "Edit category" : "New category"}</h2>
            </div>
            <div className="panel-body">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Footwear"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <label className="form-label">Status</label>
              <select className="form-select">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="panel">
            <div className="panel-header">
              <h2>Image</h2>
            </div>
            <div className="panel-body">
              <div className="thumb-upload" style={{ aspectRatio: "4/3" }}>
                <span>Click to upload</span>
                <input type="file" accept="image/*" />
              </div>
              <p
                className="mt-2 mb-0"
                style={{ fontSize: 11.5, color: "var(--text-faint)" }}
              >
                Static UI preview.
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button type="submit" className="btn btn-accent flex-fill">
              {edit ? "Save changes" : "Create category"}
            </button>
            <button
              type="button"
              className="btn btn-outline-console"
              onClick={() => nav("/admin/categories")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

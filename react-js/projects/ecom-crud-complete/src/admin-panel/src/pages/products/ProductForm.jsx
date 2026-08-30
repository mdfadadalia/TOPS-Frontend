import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, saveProduct, clearCurrentProduct } from "../../../../store/slices/productSlice.js";
import { fetchCategories } from "../../../../store/slices/categorySlice.js";
import { ErrorBanner } from "../../components/common/States.jsx";
import { withCacheBust } from "../../../../utils/imageUrl.js";

const MAX_IMAGE_MB = 5;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

const emptyForm = {
  name: "",
  sku: "",
  brand: "",
  categoryId: "",
  price: "",
  oldPrice: "",
  stock: "",
  description: "",
  status: "active",
  isFeatured: false,
};

export default function ProductForm() {
  const { id } = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const edit = Boolean(id);
  const { current, saving, error } = useSelector((state) => state.products);
  const { items: categories } = useSelector((state) => state.categories);

  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [imageError, setImageError] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
    if (edit) dispatch(fetchProduct(id));
    return () => dispatch(clearCurrentProduct());
  }, [dispatch, id, edit]);

  useEffect(() => {
    if (edit && current) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrating local edit form from fetched record
      setForm({
        name: current.name || "",
        sku: current.sku || "",
        brand: current.brand || "",
        categoryId: current.categoryId || "",
        price: current.price ?? "",
        oldPrice: current.oldPrice ?? "",
        stock: current.stock ?? "",
        description: current.description || "",
        status: current.status || "active",
        isFeatured: Boolean(current.isFeatured),
      });
      setImagePreview(withCacheBust(current.images?.[0], current.updatedAt) || "");
    }
  }, [edit, current]);

  const field = (key) => ({
    value: form[key],
    onChange: (e) => setForm({ ...form, [key]: e.target.value }),
  });

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageError("");
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setImageError("Please choose a JPG, PNG, WEBP or GIF image.");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_IMAGE_MB * 1024 * 1024) {
      setImageError(`Image is too large — please keep it under ${MAX_IMAGE_MB}MB.`);
      e.target.value = "";
      return;
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("sku", form.sku);
    formData.append("brand", form.brand);
    if (form.categoryId) formData.append("category", form.categoryId);
    formData.append("price", form.price);
    if (form.oldPrice) formData.append("oldPrice", form.oldPrice);
    formData.append("stock", form.stock);
    formData.append("description", form.description);
    formData.append("isActive", form.status === "active");
    formData.append("isFeatured", form.isFeatured);
    if (imageFile) formData.append("images", imageFile);

    const result = await dispatch(saveProduct({ id: edit ? id : undefined, formData }));
    if (saveProduct.fulfilled.match(result)) nav("/admin/products");
  };

  return (
    <form onSubmit={submit}>
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="panel">
            <div className="panel-header">
              <h2>{edit ? "Edit product" : "New product"}</h2>
            </div>
            <div className="panel-body">
              <ErrorBanner message={error} />
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Product name</label>
                  <input className="form-control" required {...field("name")} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Brand</label>
                  <input className="form-control" {...field("brand")} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">SKU</label>
                  <input className="form-control mono" {...field("sku")} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Price</label>
                  <div className="input-group">
                    <span className="input-group-text">₹</span>
                    <input className="form-control" type="number" min="0" required {...field("price")} />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Compare-at price</label>
                  <div className="input-group">
                    <span className="input-group-text">₹</span>
                    <input className="form-control" type="number" min="0" {...field("oldPrice")} />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Stock</label>
                  <input className="form-control" type="number" min="0" required {...field("stock")} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Category</label>
                  <select className="form-select" {...field("categoryId")}>
                    <option value="">Select category</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows="5" {...field("description")} />
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
              <select className="form-select" {...field("status")}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={form.isFeatured}
                  onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })}
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
              <h2>Image</h2>
            </div>
            <div className="panel-body">
              <label className="thumb-upload" style={{ aspectRatio: "1/1", cursor: "pointer", display: "block" }}>
                {imagePreview ? (
                  <img src={imagePreview} alt="product" />
                ) : (
                  <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>Click to upload image</span>
                )}
                <input type="file" accept="image/*" hidden onChange={handleImage} />
              </label>
              {imageError && (
                <p className="text-danger mt-2 mb-0" style={{ fontSize: 12.8 }}>
                  <i className="bi bi-exclamation-triangle me-1" />{imageError}
                </p>
              )}
            </div>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button type="submit" className="btn btn-accent flex-fill" disabled={saving}>
              {saving ? "Saving…" : edit ? "Save changes" : "Create product"}
            </button>
            <button type="button" className="btn btn-outline-console" onClick={() => nav("/admin/products")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

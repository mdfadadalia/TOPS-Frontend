import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, saveCategory } from "../../../../store/slices/categorySlice.js";
import { ErrorBanner } from "../../components/common/States.jsx";
import { withCacheBust } from "../../../../utils/imageUrl.js";

const MAX_IMAGE_MB = 5;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export default function CategoryForm() {
  const { id } = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const edit = Boolean(id);
  const { current, saving, error } = useSelector((state) => state.categories);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [imageError, setImageError] = useState("");

  useEffect(() => {
    if (edit) dispatch(fetchCategory(id));
  }, [dispatch, id, edit]);

  useEffect(() => {
    if (edit && current) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrating local edit form from fetched record
      setName(current.name || "");
      setDescription(current.description || "");
      setStatus(current.status || "active");
      setImagePreview(withCacheBust(current.image, current.updatedAt) || "");
    }
  }, [edit, current]);

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
    formData.append("name", name);
    formData.append("description", description);
    formData.append("isActive", status === "active");
    if (imageFile) formData.append("image", imageFile);

    const result = await dispatch(saveCategory({ id: edit ? id : undefined, formData }));
    if (saveCategory.fulfilled.match(result)) nav("/admin/categories");
  };

  return (
    <form onSubmit={submit}>
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="panel">
            <div className="panel-header">
              <h2>{edit ? "Edit category" : "New category"}</h2>
            </div>
            <div className="panel-body">
              <ErrorBanner message={error} />
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
              <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
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
              <label className="thumb-upload" style={{ aspectRatio: "4/3", cursor: "pointer", display: "block" }}>
                {imagePreview ? (
                  <img src={imagePreview} alt="category" />
                ) : (
                  <span>Click to upload</span>
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
              {saving ? "Saving…" : edit ? "Save changes" : "Create category"}
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

import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  price: "",
  category: "",
  quantity: 0,
};

function ProductModal({ product, onAdd, onUpdate, onClose, isSaving }) {
  const [form, setForm] = useState(emptyForm);
  const [submitError, setSubmitError] = useState("");
  const isEdit = Boolean(product);

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name ?? "",
        price: product.price ?? "",
        category: product.category ?? "",
        quantity: product.quantity ?? 0,
      });
    } else {
      setForm(emptyForm);
    }
  }, [product]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || form.price === "" || !form.category) {
      return;
    }

    const payload = {
      name: form.name.trim(),
      price: Number(form.price),
      category: form.category,
      quantity: Number(form.quantity),
    };

    setSubmitError("");

    try {
      if (isEdit) {
        await onUpdate(product.id, payload);
      } else {
        await onAdd(payload);
      }
    } catch (error) {
      setSubmitError(error.message);
    }
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">
                {isEdit ? "Edit Product" : "Add Product"}
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {submitError && <div className="alert alert-danger">{submitError}</div>}
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter product name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Price</label>

                <div className="input-group">
                  <span className="input-group-text">₹</span>

                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Enter price"
                    min="0"
                    step="0.01"
                    value={form.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>

                <select
                  name="category"
                  className="form-select"
                  value={form.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Food">Food</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Quantity</label>

                <input
                  type="number"
                  name="quantity"
                  className="form-control"
                  placeholder="Enter quantity"
                  min="0"
                  step="1"
                  value={form.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                onClick={onClose}
                disabled={isSaving}
              >
                Cancel
              </button>

              <button type="submit" className="btn btn-primary" disabled={isSaving}>
                <i className="bi bi-check-lg me-1"></i>
                {isSaving ? "Saving..." : isEdit ? "Update Product" : "Save Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;

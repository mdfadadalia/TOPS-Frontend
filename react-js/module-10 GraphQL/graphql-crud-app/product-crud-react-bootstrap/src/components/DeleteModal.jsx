function DeleteModal({ product, onDelete, onClose, isDeleting }) {
  if (!product) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body text-center p-4">
            <div className="text-danger fs-1 mb-3">
              <i className="bi bi-exclamation-triangle"></i>
            </div>

            <h5>Delete Product?</h5>

            <p className="text-muted mb-4">
              Are you sure you want to delete{" "}
              <strong>{product.name}</strong>?
              <br />
              This action cannot be undone.
            </p>

            <button
              type="button"
              className="btn btn-light me-2"
              onClick={onClose}
              disabled={isDeleting}
            >
              Cancel
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDelete().catch(() => {})}
              disabled={isDeleting}
            >
              <i className="bi bi-trash me-1"></i>
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;

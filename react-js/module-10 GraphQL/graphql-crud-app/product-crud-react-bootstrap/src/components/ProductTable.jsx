function formatDate(value) {
  if (!value) return "-";

  // GraphQL String serializes a Mongoose Date as its millisecond timestamp.
  // Convert numeric timestamp strings before attempting normal date parsing.
  const isTimestamp =
    typeof value === "number" ||
    (typeof value === "string" && /^\d+$/.test(value.trim()));
  const date = new Date(isTimestamp ? Number(value) : value);

  if (Number.isNaN(date.getTime())) return "-";

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="card product-card border-0">
      <div className="card-body">
        {products.length === 0 ? (
          <div className="text-center py-5">
            <i className="bi bi-box-seam empty-icon"></i>
            <h5 className="mt-3">No products found</h5>
            <p className="text-muted mb-0">
              Try changing your search or filter.
            </p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Created Date</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, index) => {
                  let quantityClass = "quantity-good";

                  if (product.quantity === 0) {
                    quantityClass = "quantity-out";
                  } else if (product.quantity < 10) {
                    quantityClass = "quantity-low";
                  }

                  return (
                    <tr key={product.id}>
                      <td>{index + 1}</td>

                      <td>
                        <div className="product-name">{product.name}</div>
                      </td>

                      <td>
                        <span className="category-badge">
                          {product.category}
                        </span>
                      </td>

                      <td>
                        <strong>
                          ₹{Number(product.price).toLocaleString("en-IN")}
                        </strong>
                      </td>

                      <td>
                        <span
                          className={`quantity-badge ${quantityClass}`}
                        >
                          {product.quantity}
                        </span>
                      </td>

                      <td>{formatDate(product.createdAt)}</td>

                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary action-btn me-1"
                          onClick={() => onEdit(product)}
                          title="Edit"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger action-btn"
                          onClick={() => onDelete(product)}
                          title="Delete"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductTable;

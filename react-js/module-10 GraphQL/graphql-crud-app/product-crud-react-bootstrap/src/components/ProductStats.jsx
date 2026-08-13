function ProductStats({ products }) {
  const totalQuantity = products.reduce(
    (total, product) => total + Number(product.quantity || 0),
    0
  );

  const categories = new Set(products.map((product) => product.category));

  return (
    <div className="row g-3 mb-4">
      <div className="col-md-4">
        <div className="card stat-card h-100 p-3">
          <div className="d-flex align-items-center">
            <div className="stat-icon bg-primary-subtle text-primary">
              <i className="bi bi-box"></i>
            </div>
            <div className="ms-3">
              <small className="text-muted">Total Products</small>
              <h4 className="mb-0">{products.length}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card stat-card h-100 p-3">
          <div className="d-flex align-items-center">
            <div className="stat-icon bg-success-subtle text-success">
              <i className="bi bi-stack"></i>
            </div>
            <div className="ms-3">
              <small className="text-muted">Total Quantity</small>
              <h4 className="mb-0">{totalQuantity}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card stat-card h-100 p-3">
          <div className="d-flex align-items-center">
            <div className="stat-icon bg-warning-subtle text-warning">
              <i className="bi bi-tags"></i>
            </div>
            <div className="ms-3">
              <small className="text-muted">Categories</small>
              <h4 className="mb-0">{categories.size}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductStats;
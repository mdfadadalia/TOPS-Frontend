import React from 'react'

const App = () => {
  return <>
    <>
  
  {/* =========================
   NAVBAR
    ========================== */}
  <nav className="navbar navbar-expand-lg bg-white">
    <div className="container-fluid px-4">
      <a className="navbar-brand fw-bold text-primary" href="#">
        <i className="bi bi-box-seam me-2" />
        Product Manager
      </a>
      <div className="ms-auto">
        <button className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-person-circle me-1" />
          Admin
        </button>
      </div>
    </div>
  </nav>
  {/* =========================
   MAIN CONTENT
    ========================== */}
  <main className="container-fluid px-4 py-4">
    {/* PAGE HEADER */}
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
      <div>
        <h3 className="page-title mb-1">Products</h3>
        <p className="text-muted mb-0">Manage your products and inventory</p>
      </div>
      <button
        className="btn btn-primary mt-3 mt-md-0"
        data-bs-toggle="modal"
        data-bs-target="#productModal"
        onclick="openAddModal()"
      >
        <i className="bi bi-plus-lg me-1" />
        Add Product
      </button>
    </div>
    {/* =========================
       STATISTICS
  ========================== */}
    <div className="row g-3 mb-4">
      <div className="col-md-4">
        <div className="card stat-card p-3">
          <div className="d-flex align-items-center">
            <div className="stat-icon bg-primary-subtle text-primary">
              <i className="bi bi-box" />
            </div>
            <div className="ms-3">
              <small className="text-muted">Total Products</small>
              <h4 className="mb-0" id="totalProducts">
                6
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card stat-card p-3">
          <div className="d-flex align-items-center">
            <div className="stat-icon bg-success-subtle text-success">
              <i className="bi bi-stack" />
            </div>
            <div className="ms-3">
              <small className="text-muted">Total Quantity</small>
              <h4 className="mb-0" id="totalQuantity">
                0
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card stat-card p-3">
          <div className="d-flex align-items-center">
            <div className="stat-icon bg-warning-subtle text-warning">
              <i className="bi bi-tags" />
            </div>
            <div className="ms-3">
              <small className="text-muted">Categories</small>
              <h4 className="mb-0" id="totalCategories">
                0
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* =========================
       PRODUCT TABLE CARD
  ========================== */}
    <div className="card product-card">
      <div className="card-body">
        {/* SEARCH / FILTER */}
        <div className="row g-2 mb-3">
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search" />
              </span>
              <input
                type="text"
                id="searchInput"
                className="form-control"
                placeholder="Search product..."
              />
            </div>
          </div>
          <div className="col-md-3">
            <select id="categoryFilter" className="form-select">
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Food">Food</option>
            </select>
          </div>
          <div className="col-md-3 text-md-end">
            <button
              className="btn btn-outline-secondary w-100"
              onclick="resetFilters()"
            >
              <i className="bi bi-arrow-clockwise me-1" />
              Reset
            </button>
          </div>
        </div>
        {/* TABLE */}
        <div className="table-container">
          <table className="table table-hover align-middle">
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
            <tbody id="productTableBody"></tbody>
          </table>
        </div>
        {/* EMPTY MESSAGE */}
        <div id="noData" className="text-center py-5 d-none">
          <i className="bi bi-box-seam fs-1 text-muted" />
          <h5 className="mt-3">No products found</h5>
          <p className="text-muted">Try changing your search or filter.</p>
        </div>
      </div>
    </div>
    {/* FOOTER */}
    <div className="footer text-center mt-4">
      Product Management System © 2026
    </div>
  </main>
  {/* =================================================
   ADD / EDIT PRODUCT MODAL
    ================================================== */}
  <div className="modal fade" id="productModal" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="modalTitle">
            Add Product
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div className="modal-body">
          <form id="productForm">
            <input type="hidden" id="productId" />
            {/* PRODUCT NAME */}
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                id="productName"
                className="form-control"
                placeholder="Enter product name"
                required=""
              />
            </div>
            {/* PRICE */}
            <div className="mb-3">
              <label className="form-label">Price</label>
              <div className="input-group">
                <span className="input-group-text">₹</span>
                <input
                  type="number"
                  id="productPrice"
                  className="form-control"
                  placeholder="Enter price"
                  min={0}
                  required=""
                />
              </div>
            </div>
            {/* CATEGORY */}
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select id="productCategory" className="form-select" required="">
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Food">Food</option>
              </select>
            </div>
            {/* QUANTITY */}
            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                id="productQuantity"
                className="form-control"
                placeholder="Enter quantity"
                min={0}
                defaultValue={0}
                required=""
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-light"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onclick="saveProduct()"
          >
            <i className="bi bi-check-lg me-1" />
            Save Product
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* =================================================
   DELETE CONFIRMATION MODAL
    ================================================== */}
  <div className="modal fade" id="deleteModal" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center p-4">
          <div className="text-danger fs-1 mb-3">
            <i className="bi bi-exclamation-triangle" />
          </div>
          <h5>Delete Product?</h5>
          <p className="text-muted mb-4">
            Are you sure you want to delete
            <strong id="deleteProductName" />?
            <br />
            This action cannot be undone.
          </p>
          <button
            type="button"
            className="btn btn-light me-2"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onclick="confirmDelete()"
          >
            <i className="bi bi-trash me-1" />
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap JS */}
</>

  </>
}

export default App

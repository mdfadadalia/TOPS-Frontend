import { useMemo, useState } from "react";
import { useMutation, useQuery } from "@apollo/client/react";
import ProductStats from "./components/ProductStats";
import ProductTable from "./components/ProductTable";
import ProductModal from "./components/ProductModal";
import DeleteModal from "./components/DeleteModal";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
} from "./api/products";

function App() {
  const [actionError, setActionError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalMode, setModalMode] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { data, loading: isLoading, error: queryError, refetch } = useQuery(GET_PRODUCTS);
  const [createProduct, { loading: isCreating }] = useMutation(CREATE_PRODUCT);
  const [updateProduct, { loading: isUpdating }] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct, { loading: isDeleting }] = useMutation(DELETE_PRODUCT);
  const products = data?.products ?? [];
  const isSaving = isCreating || isUpdating;
  const error = actionError || queryError?.message;

  const loadProducts = async () => {
    setActionError("");
    await refetch();
  };

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))].sort(),
    [products]
  );

  const filteredProducts = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !searchText ||
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      const matchesCategory =
        !category || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  const openAddModal = () => {
    setSelectedProduct(null);
    setModalMode("add");
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalMode("edit");
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setModalMode(null);
  };

  const handleAdd = async (product) => {
    setActionError("");

    try {
      await createProduct({ variables: { input: product } });
      await refetch();
      closeProductModal();
    } catch (requestError) {
      setActionError(requestError.message);
      throw requestError;
    }
  };

  const handleUpdate = async (id, input) => {
    setActionError("");

    try {
      await updateProduct({ variables: { id, input } });
      await refetch();
      closeProductModal();
    } catch (requestError) {
      setActionError(requestError.message);
      throw requestError;
    }
  };

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedProduct(null);
    setShowDeleteModal(false);
  };

  const handleDelete = async () => {
    if (!selectedProduct) return;

    setActionError("");

    try {
      await deleteProduct({ variables: { id: selectedProduct.id } });
      await refetch();
      closeDeleteModal();
    } catch (requestError) {
      setActionError(requestError.message);
      throw requestError;
    }
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white app-navbar">
        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold text-primary" href="/">
            <i className="bi bi-box-seam me-2"></i>
            Product Manager
          </a>

          <div className="ms-auto">
            <button type="button" className="btn btn-outline-secondary btn-sm">
              <i className="bi bi-person-circle me-1"></i>
              M.D.Fadadalia
            </button>
          </div>
        </div>
      </nav>

      <main className="container-fluid px-4 py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
          <div>
            <h3 className="page-title mb-1">Products</h3>
            <p className="text-muted mb-0">
              Manage your products and inventory
            </p>
          </div>

          <button
            type="button"
            className="btn btn-primary mt-3 mt-md-0"
            onClick={openAddModal}
          >
            <i className="bi bi-plus-lg me-1"></i>
            Add Product
          </button>
        </div>

        <ProductStats products={products} />

        {error && (
          <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
            <span>{error}</span>
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={loadProducts}>
              Retry
            </button>
          </div>
        )}

        <div className="card product-card border-0 mb-3">
          <div className="card-body">
            <div className="row g-2">
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-search"></i>
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search product or category..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-3">
                <select
                  className="form-select"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option value="">All Categories</option>

                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100"
                  onClick={resetFilters}
                >
                  <i className="bi bi-arrow-clockwise me-1"></i>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-5 text-muted">
            <div className="spinner-border spinner-border-sm me-2" role="status" />
            Loading products...
          </div>
        ) : (
          <ProductTable
            products={filteredProducts}
            onEdit={openEditModal}
            onDelete={openDeleteModal}
          />
        )}

        <div className="footer text-center mt-4">
          Product Management System © 2026
        </div>
      </main>

      {modalMode && (
        <ProductModal
          product={modalMode === "edit" ? selectedProduct : null}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          onClose={closeProductModal}
          isSaving={isSaving}
        />
      )}

      {modalMode && <div className="modal-backdrop fade show"></div>}

      {showDeleteModal && (
        <>
          <DeleteModal
            product={selectedProduct}
            onDelete={handleDelete}
            onClose={closeDeleteModal}
            isDeleting={isDeleting}
          />
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </>
  );
}

export default App;

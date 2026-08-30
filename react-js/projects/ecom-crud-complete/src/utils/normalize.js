// Shared helpers that translate whatever shape the API returns into a
// predictable shape the UI can rely on. The backend for this project lives
// in a separate repository, so these normalizers defensively accept a few
// common field-name variants (e.g. `name`/`title`, `_id`/`id`) instead of
// assuming one exact schema. This keeps the UI resilient if a field is
// renamed or omitted by the API.

export const idOf = (entity) => entity?._id || entity?.id || entity?.uuid || "";

export const imageOf = (entity, fallback = "/assets/img/product-1-1.jpg") => {
  const images = entity?.images || entity?.gallery;
  if (Array.isArray(images) && images.length) {
    const first = images[0];
    return typeof first === "string" ? first : first?.url || fallback;
  }
  return entity?.image || entity?.thumbnail || entity?.imageUrl || fallback;
};

export const imagesOf = (entity) => {
  const images = entity?.images || entity?.gallery;
  if (Array.isArray(images) && images.length) {
    return images.map((img) => (typeof img === "string" ? img : img?.url)).filter(Boolean);
  }
  const single = entity?.image || entity?.thumbnail || entity?.imageUrl;
  return single ? [single] : [];
};

export const categoryNameOf = (product) => {
  const category = product?.category;
  if (!category) return product?.categoryName || "";
  if (typeof category === "string") return category;
  return category.name || "";
};

export const normalizeProduct = (raw) => {
  if (!raw) return null;
  const price = Number(raw.price ?? raw.sellingPrice ?? raw.salePrice ?? 0);
  const oldPriceRaw = raw.oldPrice ?? raw.originalPrice ?? raw.mrp ?? raw.comparePrice;
  const oldPrice = oldPriceRaw != null ? Number(oldPriceRaw) : null;
  const stock = Number(raw.stock ?? raw.quantity ?? raw.countInStock ?? 0);
  const rating = Number(raw.rating ?? raw.ratingsAverage ?? raw.averageRating ?? 0);
  const reviews = raw.reviews || raw.ratings || [];
  return {
    id: idOf(raw),
    name: raw.name || raw.title || "Untitled product",
    description: raw.description || raw.details || "",
    price,
    oldPrice: oldPrice && oldPrice > price ? oldPrice : null,
    discountPercent:
      oldPrice && oldPrice > price ? Math.round(((oldPrice - price) / oldPrice) * 100) : raw.discountPercentage || 0,
    images: imagesOf(raw),
    category: categoryNameOf(raw),
    categoryId: typeof raw.category === "object" ? idOf(raw.category) : raw.categoryId || raw.category || "",
    stock,
    inStock: stock > 0 || raw.inStock === true,
    sku: raw.sku || raw.SKU || "",
    brand: raw.brand || "",
    rating,
    reviewsCount: raw.reviewsCount ?? raw.numReviews ?? (Array.isArray(reviews) ? reviews.length : 0),
    reviews: Array.isArray(reviews) ? reviews : [],
    isFeatured: Boolean(raw.isFeatured || raw.featured),
    isActive: raw.isActive ?? raw.status !== "inactive",
    status: raw.status || (raw.isActive === false ? "inactive" : "active"),
    tags: raw.tags || [],
    colors: raw.colors || [],
    sizes: raw.sizes || [],
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt || raw.modifiedAt || raw.updated_at || null,
    raw,
  };
};

export const normalizeCategory = (raw) => {
  if (!raw) return null;
  return {
    id: idOf(raw),
    name: raw.name || raw.title || "Untitled category",
    slug: raw.slug || "",
    image: imageOf(raw, "/assets/img/category-1.jpg"),
    description: raw.description || "",
    isActive: raw.isActive ?? raw.status !== "inactive",
    status: raw.status || (raw.isActive === false ? "inactive" : "active"),
    productCount: raw.productCount ?? raw.productsCount ?? 0,
    updatedAt: raw.updatedAt || raw.modifiedAt || raw.updated_at || null,
    raw,
  };
};

export const normalizeOrder = (raw) => {
  if (!raw) return null;
  const items = raw.items || raw.orderItems || raw.products || [];
  return {
    id: idOf(raw),
    orderNumber: raw.orderNumber || raw.orderId || idOf(raw),
    status: raw.status || raw.orderStatus || "pending",
    paymentStatus: raw.paymentStatus || raw.payment?.status || "pending",
    paymentMethod: raw.paymentMethod || raw.payment?.method || "cod",
    total: Number(raw.totalAmount ?? raw.total ?? raw.grandTotal ?? 0),
    subtotal: Number(raw.subtotal ?? raw.itemsPrice ?? 0),
    shippingFee: Number(raw.shippingFee ?? raw.shippingPrice ?? 0),
    items: items.map((it) => ({
      id: idOf(it),
      productId: idOf(it.product) || it.productId || idOf(it),
      name: it.name || it.product?.name || it.title || "Item",
      image: imageOf(it.product || it),
      price: Number(it.price ?? it.product?.price ?? 0),
      quantity: Number(it.quantity ?? it.qty ?? 1),
    })),
    shippingAddress: raw.shippingAddress || raw.address || null,
    customer: raw.user || raw.customer || null,
    notes: raw.notes || "",
    createdAt: raw.createdAt || raw.placedAt,
    raw,
  };
};

export const normalizeUser = (raw) => {
  if (!raw) return null;
  return {
    id: idOf(raw),
    name: raw.name || raw.fullName || "Unnamed user",
    email: raw.email || "",
    phone: raw.phone || raw.mobile || "",
    role: raw.role || "customer",
    isActive: raw.isActive ?? raw.status !== "inactive",
    status: raw.status || (raw.isActive === false ? "inactive" : "active"),
    createdAt: raw.createdAt,
    raw,
  };
};

export const normalizePayment = (raw) => {
  if (!raw) return null;
  return {
    id: idOf(raw),
    orderId: idOf(raw.order) || raw.orderId || "",
    amount: Number(raw.amount ?? raw.total ?? 0),
    status: raw.status || "created",
    method: raw.method || raw.paymentMethod || "razorpay",
    provider: raw.provider || "razorpay",
    transactionId: raw.transactionId || raw.razorpayPaymentId || raw.paymentId || "",
    customer: raw.user || raw.customer || null,
    createdAt: raw.createdAt,
    raw,
  };
};

export const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(amount) || 0);

export const formatDate = (value) => {
  if (!value) return "—";
  try {
    return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(
      new Date(value),
    );
  } catch {
    return "—";
  }
};

// Extracts an array of records plus pagination info from any of the common
// envelope shapes the API might respond with.
export const listFrom = (payload, key) => {
  if (Array.isArray(payload)) return { items: payload, pagination: null };
  const items = payload?.[key] ?? payload?.items ?? payload?.data ?? (Array.isArray(payload) ? payload : []);
  const pagination = payload?.pagination || {
    page: payload?.page,
    totalPages: payload?.totalPages,
    total: payload?.total ?? payload?.count,
  };
  return { items: Array.isArray(items) ? items : [], pagination };
};

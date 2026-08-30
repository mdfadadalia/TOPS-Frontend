import { useLocation, matchPath } from "react-router-dom";

// Route metadata drives the title and breadcrumb displayed in the shared top bar.
const ROUTES = [
  { path: "/admin", title: "Dashboard", crumb: "Overview" },
  { path: "/admin/categories", title: "Categories", crumb: "Catalog" },
  {
    path: "/admin/categories/new",
    title: "New category",
    crumb: "Catalog / Categories",
  },
  {
    path: "/admin/categories/:id/edit",
    title: "Edit category",
    crumb: "Catalog / Categories",
  },
  { path: "/admin/products", title: "Products", crumb: "Catalog" },
  { path: "/admin/products/new", title: "New product", crumb: "Catalog / Products" },
  {
    path: "/admin/products/:id/edit",
    title: "Edit product",
    crumb: "Catalog / Products",
  },
  { path: "/admin/orders", title: "Orders", crumb: "Sales" },
  { path: "/admin/orders/:id", title: "Order detail", crumb: "Sales / Orders" },
  { path: "/admin/payments", title: "Payments", crumb: "Sales" },
  { path: "/admin/users", title: "Users", crumb: "People" },
  { path: "/admin/users/:id", title: "User detail", crumb: "People / Users" },
  { path: "/admin/profile", title: "My profile", crumb: "Account" },
];

export function usePageMeta() {
  const location = useLocation();
  const match = ROUTES.find((r) =>
    matchPath({ path: r.path, end: true }, location.pathname),
  );
  return match || { title: "Commerce Console", crumb: "" };
}

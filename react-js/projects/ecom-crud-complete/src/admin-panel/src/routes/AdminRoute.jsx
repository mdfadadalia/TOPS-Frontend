import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AdminRoute() {
  const { user, isAuthenticated, isInitializing } = useSelector((state) => state.auth);
  const location = useLocation();
  if (isInitializing) return <div className="p-4">Loading secure session…</div>;
  if (!isAuthenticated) return <Navigate to="/admin/login" replace state={{ from: location }} />;
  if (user?.role !== "admin") return <Navigate to="/" replace />;
  return <Outlet />;
}

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import { Products, Category, Dashboard, Users } from "./componants/Clientlagypage";
const Dashboard = lazy(() => import("./componants/Dashboard"));
const Users = lazy(() => import("./componants/User"));
const Category = lazy(() => import("./componants/Category"));
const Products = lazy(() => import("./componants/Products"));
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/users">Users</Link> |{" "}
        <Link to="/category">Category</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
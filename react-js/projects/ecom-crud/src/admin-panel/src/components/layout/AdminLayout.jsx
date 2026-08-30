import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import { usePageMeta } from "./pageMeta.js";

export default function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { title, crumb } = usePageMeta();
  return (
    <div className="app-shell">
      <Sidebar open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.35)",
            zIndex: 30,
          }}
          className="d-lg-none"
        />
      )}
      <div className="main-col">
        <Topbar
          title={title}
          crumb={crumb}
          onMenuClick={() => setMenuOpen(true)}
        />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/slices/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [roleError, setRoleError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setRoleError("");
    const result = await dispatch(loginUser(credentials));
    if (!loginUser.fulfilled.match(result)) return;
    if (result.payload?.role !== "admin") {
      setRoleError("This account does not have admin access.");
      return;
    }
    navigate(location.state?.from?.pathname || "/admin", { replace: true });
  };

  return (
    <div className="auth-wrap">
      <div className="auth-side d-none d-lg-flex">
        <div className="mark">CC</div>

        <h1 className="display-font">
          Every order, payment, and product — one console.
        </h1>

        <p>
          Commerce Console gives your team a single, secure control room over
          catalog, orders, payments, and customers.
        </p>

        <div className="auth-pipeline">
          {["Catalog", "Cart", "Order", "Payment", "Fulfilled"].map(
            (label, i) => (
              <div
                className="seg"
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {i !== 0 && <div className="line" />}

                <div style={{ textAlign: "center" }}>
                  <div className="dot" style={{ margin: "0 auto" }} />

                  <div className="lbl">{label}</div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="auth-form-col">
        <div className="auth-card">
          <form onSubmit={submit}>
          <h2 className="display-font">Sign in</h2>

          <p className="hint">
            Sign in with your admin account to manage the store.
          </p>

          <div className="mb-3">
            <label className="form-label">Email address</label>

            <input
              type="email"
              className="form-control"
              placeholder="admin@ecommerce.com"
              value={credentials.email}
              onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              value={credentials.password}
              onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-accent w-100 mt-2"
            disabled={loading}
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>

          {(error || roleError) && <p className="text-danger small mt-3 mb-0">{roleError || error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

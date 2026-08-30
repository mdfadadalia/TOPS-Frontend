import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("Admin User");
  const [phone, setPhone] = useState("+91 98765 43210");

  return (
    <div className="row g-3">
      <div className="col-lg-7">
        <div className="panel mb-3">
          <div className="panel-header">
            <h2>Profile details</h2>
          </div>

          <div className="panel-body">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                className="thumb-upload"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                }}
              >
                <i className="bi bi-person" />
              </div>

              <div
                style={{
                  fontSize: 12.5,
                  color: "var(--text-muted)",
                }}
              >
                Profile preview
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="form-label">Email</label>
              <input
                className="form-control"
                value="admin@ecommerce.com"
                disabled
              />
            </div>
          </div>

          <div className="panel-body pt-0">
            <button className="btn btn-accent">Save changes</button>
          </div>
        </div>
      </div>

      <div className="col-lg-5">
        <div className="panel">
          <div className="panel-header">
            <h2>Change password</h2>
          </div>

          <div className="panel-body">
            {["Current password", "New password", "Confirm new password"].map(
              (label) => (
                <div className="mb-3" key={label}>
                  <label className="form-label">{label}</label>

                  <input type="password" className="form-control" />
                </div>
              ),
            )}

            <button className="btn btn-outline-console">Update password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

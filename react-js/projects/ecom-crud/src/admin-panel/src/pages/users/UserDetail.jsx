import { useParams, useNavigate } from "react-router-dom";
import StatusPill from "../../components/common/StatusPill.jsx";

// Static preview record used while the user-detail API is not connected.
const user = {
  name: "Rahul Sharma",
  email: "rahul@example.com",
  phone: "+91 98765 43210",
  role: "customer",
  active: true,
  joined: "10 Aug 2026",
  address: "12 Sunrise Avenue, Ahmedabad, Gujarat - 380015",
};
export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn btn-sm btn-outline-console mb-3"
        onClick={() => navigate("/users")}
      >
        <i className="bi bi-arrow-left me-1" /> Back to users
      </button>
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="panel">
            <div className="panel-header">
              <h2>{user.name}</h2>
              <StatusPill value={user.active ? "active" : "inactive"} />
            </div>
            <div className="panel-body">
              <div className="row g-3" style={{ fontSize: 13.8 }}>
                <div className="col-md-6">
                  <small className="text-muted">Email</small>
                  <div>{user.email}</div>
                </div>
                <div className="col-md-6">
                  <small className="text-muted">Phone</small>
                  <div>{user.phone}</div>
                </div>
                <div className="col-md-6">
                  <small className="text-muted">Role</small>
                  <div>{user.role}</div>
                </div>
                <div className="col-md-6">
                  <small className="text-muted">Joined</small>
                  <div>{user.joined}</div>
                </div>
                <div className="col-12">
                  <small className="text-muted">Address</small>
                  <div>{user.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="panel">
            <div className="panel-header">
              <h2>Account actions</h2>
            </div>
            <div className="panel-body">
              <button className="btn btn-outline-console w-100">
                Deactivate account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

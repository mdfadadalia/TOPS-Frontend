import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StatusPill from "../../components/common/StatusPill.jsx";
import ConfirmModal from "../../components/common/ConfirmModal.jsx";
import { ErrorBanner } from "../../components/common/States.jsx";
import { deleteAdminUser, fetchAdminUser, setUserActive } from "../../../../store/slices/adminSlice.js";
import { formatDate } from "../../../../utils/normalize.js";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { current: user, actionId, loading, error } = useSelector((state) => state.admin.users);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    dispatch(fetchAdminUser(id));
  }, [dispatch, id]);

  const toggleActive = () => {
    dispatch(setUserActive({ id, active: !user.isActive }));
  };

  const handleDelete = async () => {
    const result = await dispatch(deleteAdminUser(id));
    setConfirmDelete(false);
    if (deleteAdminUser.fulfilled.match(result)) navigate("/admin/users");
  };

  if (loading && !user) {
    return <div>Loading user…</div>;
  }

  if (!user) {
    return (
      <div>
        <button className="btn btn-sm btn-outline-console mb-3" onClick={() => navigate("/admin/users")}>
          <i className="bi bi-arrow-left me-1" /> Back to users
        </button>
        <ErrorBanner message={error} />
      </div>
    );
  }

  return (
    <div>
      <button className="btn btn-sm btn-outline-console mb-3" onClick={() => navigate("/admin/users")}>
        <i className="bi bi-arrow-left me-1" /> Back to users
      </button>
      <ErrorBanner message={error} />
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="panel">
            <div className="panel-header">
              <h2>{user.name}</h2>
              <StatusPill value={user.status} />
            </div>
            <div className="panel-body">
              <div className="row g-3" style={{ fontSize: 13.8 }}>
                <div className="col-md-6">
                  <small className="text-muted">Email</small>
                  <div>{user.email}</div>
                </div>
                <div className="col-md-6">
                  <small className="text-muted">Phone</small>
                  <div>{user.phone || '—'}</div>
                </div>
                <div className="col-md-6">
                  <small className="text-muted">Role</small>
                  <div style={{ textTransform: 'capitalize' }}>{user.role}</div>
                </div>
                <div className="col-md-6">
                  <small className="text-muted">Joined</small>
                  <div>{formatDate(user.createdAt)}</div>
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
            <div className="panel-body d-flex flex-column gap-2">
              <button className="btn btn-outline-console w-100" onClick={toggleActive} disabled={actionId === id}>
                {actionId === id ? "Working…" : user.isActive ? "Deactivate account" : "Activate account"}
              </button>
              {user.role !== 'admin' && (
                <button className="btn btn-outline-console w-100 text-danger" onClick={() => setConfirmDelete(true)}>
                  Delete account
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <ConfirmModal
        show={confirmDelete}
        title="Delete user"
        body={`Are you sure you want to permanently delete "${user.name}"? This cannot be undone.`}
        confirmLabel="Delete"
        onConfirm={handleDelete}
        onCancel={() => setConfirmDelete(false)}
      />
    </div>
  );
}

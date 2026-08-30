import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, updateProfile } from "../../../store/slices/authSlice.js";
import { ErrorBanner } from "../components/common/States.jsx";

export default function Profile() {
  const dispatch = useDispatch();
  const { user, savingProfile, error } = useSelector((state) => state.auth);
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [profileMessage, setProfileMessage] = useState("");

  const [passwords, setPasswords] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [passwordMessage, setPasswordMessage] = useState("");

  const saveProfile = async () => {
    setProfileMessage("");
    const result = await dispatch(updateProfile({ name, phone }));
    setProfileMessage(
      updateProfile.fulfilled.match(result) ? "Profile updated." : result.payload?.message || "Unable to update profile.",
    );
  };

  const updatePassword = async () => {
    setPasswordMessage("");
    if (passwords.newPassword !== passwords.confirmPassword) {
      setPasswordMessage("New password and confirmation do not match.");
      return;
    }
    const result = await dispatch(changePassword(passwords));
    if (changePassword.fulfilled.match(result)) {
      setPasswordMessage("Password updated.");
      setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } else {
      setPasswordMessage(result.payload?.message || "Unable to update password.");
    }
  };

  return (
    <div className="row g-3">
      <div className="col-lg-7">
        <div className="panel mb-3">
          <div className="panel-header">
            <h2>Profile details</h2>
          </div>
          <div className="panel-body">
            <ErrorBanner message={error} />
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="thumb-upload" style={{ width: 72, height: 72, borderRadius: "50%" }}>
                <i className="bi bi-person" />
              </div>
              <div style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{user?.role}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input className="form-control" value={user?.email || ""} disabled />
            </div>
          </div>
          <div className="panel-body pt-0">
            <button className="btn btn-accent" onClick={saveProfile} disabled={savingProfile}>
              {savingProfile ? "Saving…" : "Save changes"}
            </button>
            {profileMessage && <span className="ms-2" style={{ fontSize: 13 }}>{profileMessage}</span>}
          </div>
        </div>
      </div>

      <div className="col-lg-5">
        <div className="panel">
          <div className="panel-header">
            <h2>Change password</h2>
          </div>
          <div className="panel-body">
            <div className="mb-3">
              <label className="form-label">Current password</label>
              <input
                type="password"
                className="form-control"
                value={passwords.currentPassword}
                onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">New password</label>
              <input
                type="password"
                className="form-control"
                value={passwords.newPassword}
                onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm new password</label>
              <input
                type="password"
                className="form-control"
                value={passwords.confirmPassword}
                onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
              />
            </div>
            <button className="btn btn-outline-console" onClick={updatePassword} disabled={savingProfile}>
              {savingProfile ? "Working…" : "Update password"}
            </button>
            {passwordMessage && <div className="mt-2" style={{ fontSize: 13 }}>{passwordMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

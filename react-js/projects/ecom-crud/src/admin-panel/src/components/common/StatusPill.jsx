const MAP = {
  // Order statuses
  pending: "warning",
  processing: "info",
  shipped: "info",
  delivered: "success",
  cancelled: "danger",
  // Payment statuses
  paid: "success",
  failed: "danger",
  refunded: "neutral",
  created: "warning",
  // User and generic statuses
  active: "success",
  inactive: "neutral",
  true: "success",
  false: "danger",
};

export default function StatusPill({ value, labelOverride }) {
  const key = String(value).toLowerCase();
  const tone = MAP[key] || "neutral";
  const label =
    labelOverride || String(value)[0]?.toUpperCase() + String(value).slice(1);
  return <span className={`pill pill-${tone}`}>{label}</span>;
}

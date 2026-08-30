// Ordered fulfillment stages used to calculate completed and current pipeline states.
const STEPS = [
  { key: "pending", label: "Pending", icon: "bi-hourglass-split" },
  { key: "processing", label: "Processing", icon: "bi-gear" },
  { key: "shipped", label: "Shipped", icon: "bi-truck" },
  { key: "delivered", label: "Delivered", icon: "bi-box-seam" },
];

export default function OrderPipeline({ status }) {
  const isCancelled = status === "cancelled";
  const currentIndex = STEPS.findIndex((s) => s.key === status);

  return (
    <div className="order-pipeline">
      {STEPS.map((step, i) => {
        let cls = "";
        if (isCancelled) cls = i === 0 ? "done" : "";
        else if (i < currentIndex) cls = "done";
        else if (i === currentIndex) cls = "current";

        return (
          <div className={`op-step ${cls}`} key={step.key}>
            <div className="op-track" />
            <div className="op-node">
              <i className={`bi ${step.icon}`} style={{ fontSize: 11 }} />
            </div>
            <div className="op-label">{step.label}</div>
          </div>
        );
      })}
      {isCancelled && (
        <div className="op-step cancelled">
          <div className="op-track" />
          <div className="op-node">
            <i className="bi bi-x-lg" style={{ fontSize: 11 }} />
          </div>
          <div className="op-label">Cancelled</div>
        </div>
      )}
    </div>
  );
}

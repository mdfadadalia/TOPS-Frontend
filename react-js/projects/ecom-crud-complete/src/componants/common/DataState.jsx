import './DataState.css';

/**
 * Shown while data is being fetched from the API.
 * Replaces bare "Loading..." text across the storefront with a
 * consistent, on-brand spinner + message.
 */
export function LoadingState({ label = 'Loading…', compact = false }) {
  return (
    <div className={`data-state data-state--loading${compact ? ' data-state--compact' : ''}`} role="status" aria-live="polite">
      <span className="data-state__spinner" aria-hidden="true" />
      <p className="data-state__text">{label}</p>
    </div>
  );
}

/**
 * Shown when a request fails. Optionally offers a retry button when
 * the caller passes an `onRetry` handler.
 */
export function ErrorState({ message = 'Something went wrong. Please try again.', onRetry }) {
  return (
    <div className="data-state data-state--error" role="alert">
      <span className="data-state__icon" aria-hidden="true">
        <i className="fi fi-rs-triangle-warning" />
      </span>
      <p className="data-state__text">{message}</p>
      {onRetry && (
        <button type="button" className="btn btn--sm data-state__retry" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

/**
 * Shown when a request succeeds but returns nothing to display.
 */
export function EmptyState({ title = 'Nothing to show yet', hint, action, icon = 'fi-rs-box-open' }) {
  return (
    <div className="data-state data-state--empty">
      <span className="data-state__icon" aria-hidden="true">
        <i className={`fi ${icon}`} />
      </span>
      <p className="data-state__text data-state__text--title">{title}</p>
      {hint && <p className="data-state__text data-state__text--hint">{hint}</p>}
      {action && <div className="data-state__action">{action}</div>}
    </div>
  );
}

/**
 * Convenience wrapper: pass the three flags a slice already tracks
 * (loading / error / whether there's data) and render the right
 * state without repeating the same if/else chain everywhere.
 *
 *   <DataState loading={loading} error={error} onRetry={...}
 *              isEmpty={items.length === 0} emptyTitle="No products found">
 *     {content}
 *   </DataState>
 */
export function DataState({
  loading,
  error,
  onRetry,
  isEmpty,
  emptyTitle,
  emptyHint,
  emptyAction,
  loadingLabel,
  children,
}) {
  if (loading) return <LoadingState label={loadingLabel} />;
  if (error) return <ErrorState message={error} onRetry={onRetry} />;
  if (isEmpty) return <EmptyState title={emptyTitle} hint={emptyHint} action={emptyAction} />;
  return children;
}

export default DataState;

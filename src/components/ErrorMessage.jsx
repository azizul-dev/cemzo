import React from 'react';

/**
 * ErrorMessage component — displays when the product API request fails.
 * Shows the required message "Failed to load products. Please try again."
 * with a Retry button that re-fetches the products.
 * Responsive on mobile, tablet, and desktop.
 *
 * @param {Object} props
 * @param {Function} props.onRetry - Callback triggered when the Retry button is clicked
 */
export default function ErrorMessage({ onRetry }) {
  return (
    <div
      className="error-container"
      role="alert"
      aria-live="assertive"
    >
      {/* Warning / Error icon */}
      <div className="error-icon-wrapper">
        <svg
          className="error-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>

      <h3 className="error-title">Something went wrong</h3>

      {/* Required exact error message from the assignment */}
      <p className="error-message">
        Failed to load products. Please try again.
      </p>

      {/* Retry button re-fetches the products */}
      <button
        className="error-retry-btn"
        onClick={onRetry}
        type="button"
        aria-label="Retry loading products"
      >
        Retry
      </button>
    </div>
  );
}

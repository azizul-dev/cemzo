import React from 'react';

/**
 * Renders a user-friendly error block with retry options
 * @param {Object} props
 * @param {string} props.message - Error message to display
 * @param {Function} props.onRetry - Callback to retry operation
 */
export default function ErrorState({ message, onRetry }) {
  return (
    <div className="error-container" role="alert">
      <div className="error-icon-wrapper">
        {/* Warning Icon SVG */}
        <svg className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
      <h3 className="error-title">Failed to Load Products</h3>
      <p className="error-message">{message}</p>
      <button className="error-retry-btn" onClick={onRetry} type="button">
        Try Again
      </button>
    </div>
  );
}

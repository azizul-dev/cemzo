import React from 'react';

/**
 * Loader component — renders 8 shimmering skeleton cards that
 * exactly mirror the ProductCard layout structure.
 * Responsive: 1 col (mobile) → 2 col (sm/tablet) → 4 col (lg/desktop)
 *
 * @param {Object} props
 * @param {number} [props.count=8] - Number of skeleton cards to display
 */
export default function Loader({ count = 8 }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="skeleton-card skeleton-shimmer"
          aria-hidden="true"
          role="presentation"
        >
          {/* Mirrors ProductCard image wrapper */}
          <div className="skeleton-image" />

          {/* Mirrors category badge */}
          <div className="skeleton-badge" />

          {/* Mirrors product title (2 lines) */}
          <div className="skeleton-title" />
          <div className="skeleton-title-short" />

          {/* Mirrors product card footer: price + rating */}
          <div className="skeleton-footer">
            <div className="skeleton-price" />
            <div className="skeleton-rating" />
          </div>
        </div>
      ))}
    </>
  );
}

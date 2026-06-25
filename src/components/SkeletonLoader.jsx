import React from 'react';

/**
 * Renders shimmering card outlines to denote content loading
 * @param {Object} props
 * @param {number} [props.count=8] - Number of skeleton cards to render
 */
export default function SkeletonLoader({ count = 8 }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="skeleton-card skeleton-shimmer" aria-hidden="true">
          <div className="skeleton-image" />
          <div className="skeleton-badge" />
          <div className="skeleton-title" />
          <div className="skeleton-title-short" />
          <div className="skeleton-footer">
            <div className="skeleton-price" />
            <div className="skeleton-rating" />
          </div>
        </div>
      ))}
    </>
  );
}

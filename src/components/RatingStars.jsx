import React from 'react';

/**
 * Renders rating stars and review count
 * @param {Object} props
 * @param {number} props.rate - Rating score out of 5 (e.g. 4.3)
 * @param {number} props.count - Number of ratings
 * @param {boolean} [props.showText=true] - Whether to show the text score and count
 */
export default function RatingStars({ rate = 0, count = 0, showText = true }) {
  // Round to nearest 0.5 for visual stars
  const roundedRating = Math.round(rate * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // SVG Path for a standard star
  const starPath = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z";

  // Generate unique ID for linearGradient to avoid SVG ID collision on lists
  const gradId = `star-half-grad-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="product-card-rating" aria-label={`Rated ${rate} out of 5 stars from ${count} reviews`}>
      <div className="rating-stars">
        {/* Render Full Stars */}
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="star-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d={starPath} />
          </svg>
        ))}

        {/* Render Half Star */}
        {hasHalfStar && (
          <svg className="star-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={gradId}>
                <stop offset="50%" stopColor="var(--star-active)" />
                <stop offset="50%" stopColor="var(--star-inactive)" />
              </linearGradient>
            </defs>
            <path fill={`url(#${gradId})`} d={starPath} />
          </svg>
        )}

        {/* Render Empty Stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="star-icon empty" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d={starPath} />
          </svg>
        ))}
      </div>

      {showText && (
        <>
          <span className="rating-text">{rate.toFixed(1)}</span>
          <span className="rating-count">({count})</span>
        </>
      )}
    </div>
  );
}

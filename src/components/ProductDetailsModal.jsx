import React, { useEffect } from 'react';
import RatingStars from './RatingStars';

/**
 * Accessible Detail Modal for a single product
 * @param {Object} props
 * @param {Object} props.product - Active product data object
 * @param {Function} props.onClose - Action to close the modal
 */
export default function ProductDetailsModal({ product, onClose }) {
  const { title, price, description, image, category, rating } = product;

  // Accessibility & UX: Handle escape key and disable body scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Close only if clicking the backdrop, not the modal content itself
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-container">
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close details dialog"
          type="button"
        >
          <svg className="modal-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal content grid */}
        <div className="modal-grid">
          {/* Image Column */}
          <div className="modal-image-section">
            <img 
              src={image} 
              alt={title} 
              className="modal-image"
            />
          </div>

          {/* Details Column */}
          <div className="modal-info-section">
            <span className="modal-badge">{category}</span>
            <h2 id="modal-title" className="modal-title">{title}</h2>

            {rating && (
              <div className="modal-rating-row">
                <span className="modal-rating-score">{rating.rate}</span>
                <div className="modal-rating-bar">
                  <RatingStars rate={rating.rate} count={rating.count} showText={false} />
                </div>
                <span className="rating-count">{rating.count} ratings</span>
              </div>
            )}

            <div className="modal-divider" />

            <div className="modal-price-row">
              <span className="modal-price-label">Price</span>
              <span className="modal-price">${price.toFixed(2)}</span>
            </div>

            <div className="modal-desc-heading">Description</div>
            <p className="modal-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

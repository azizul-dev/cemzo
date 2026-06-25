import React from 'react';
import RatingStars from './RatingStars';

/**
 * Individual product item card
 * @param {Object} props
 * @param {Object} props.product - Product data object
 * @param {string} props.product.title - Product name
 * @param {number} props.product.price - Product price
 * @param {string} props.product.image - Product image URL
 * @param {string} props.product.category - Product category name
 * @param {Object} props.product.rating - Product ratings metadata
 * @param {number} props.product.rating.rate - Score out of 5
 * @param {number} props.product.rating.count - Number of reviews
 * @param {Function} props.onClick - Click action when card is selected
 */
export default function ProductCard({ product, onClick }) {
  const { title, price, image, category, rating } = product;

  return (
    <article 
      className="product-card" 
      onClick={onClick}
      tabIndex="0"
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="product-card-image-wrapper">
        <img 
          src={image} 
          alt={title} 
          className="product-card-image"
          loading="lazy"
        />
      </div>
      
      <div className="product-card-info">
        <span className="product-card-category">{category}</span>
        <h3 className="product-card-title" title={title}>
          {title}
        </h3>
        
        <div className="product-card-footer">
          <div className="product-card-price-section">
            <span className="product-card-price-label">Price</span>
            <span className="product-card-price">${price.toFixed(2)}</span>
          </div>
          
          {rating && (
            <RatingStars rate={rating.rate} count={rating.count} />
          )}
        </div>
      </div>
    </article>
  );
}

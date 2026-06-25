import React from 'react';

/**
 * Text search bar with clear button and standard icon
 * @param {Object} props
 * @param {string} props.value - Current input value
 * @param {Function} props.onChange - Input change callback
 * @param {Function} props.onClear - Clear button action callback
 */
export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="search-container">
      {/* Magnifying Glass Icon */}
      <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      
      <input
        id="product-search-input"
        type="text"
        className="search-input"
        placeholder="Search products by title..."
        value={value}
        onChange={onChange}
        aria-label="Search products"
      />
      
      {value && (
        <button
          className="search-clear-btn"
          onClick={onClear}
          type="button"
          aria-label="Clear search"
        >
          {/* Close Icon SVG */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

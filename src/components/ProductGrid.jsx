import React from 'react';

/**
 * Grid layout wrapper for list items
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to render inside grid
 */
export default function ProductGrid({ children }) {
  return (
    <div className="product-grid">
      {children}
    </div>
  );
}

import React from 'react';

/**
 * App Header container displaying branding and filter controls
 * @param {Object} props
 * @param {React.ReactNode} props.children - Search inputs or filters to render inside header controls
 */
export default function Header({ children }) {
  return (
    <header className="app-header">
      <div className="container header-content">
        <div className="brand-section">
          <div>
            <h1 className="brand-title">
              {/* Shopping Bag SVG Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Dragon Shop
            </h1>
            <p className="brand-subtitle">Discover premium items at your fingertips</p>
          </div>
        </div>
        
        {children && (
          <div className="header-controls">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}

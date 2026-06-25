import React from 'react';

/**
 * Responsive Category Filter (Tabs on Desktop, Dropdown on Mobile)
 * @param {Object} props
 * @param {Array<string>} props.categories - List of all categories
 * @param {string} props.selectedCategory - Currently active category
 * @param {Function} props.onSelectCategory - Callback when category is selected
 */
export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter-container">
      {/* Desktop/Tablet Tabs layout */}
      <div className="category-tabs-wrapper">
        <div className="category-tabs" role="tablist" aria-label="Product Categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onSelectCategory(category)}
              role="tab"
              aria-selected={selectedCategory === category}
              type="button"
            >
              {category === 'all' ? 'All Products' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Select Dropdown layout */}
      <select
        className="category-dropdown-select"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        aria-label="Filter products by category"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category === 'all' ? 'All Products' : category}
          </option>
        ))}
      </select>
    </div>
  );
}

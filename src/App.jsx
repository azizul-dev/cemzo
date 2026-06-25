import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ProductCard from './components/ProductCard';
import ProductDetailsModal from './components/ProductDetailsModal';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import useProducts from './hooks/useProducts';

export default function App() {
  const {
    categories,
    filteredProducts,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    retryFetch
  } = useProducts();

  // Track the product currently opened in the details modal
  const [activeProduct, setActiveProduct] = useState(null);

  // Clear search handler
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <>
      {/* ── Sticky App Header with Search & Category Filter ── */}
      <Header>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClear={handleClearSearch}
        />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </Header>

      {/* ── Main Catalog Content ── */}
      <main className="main-content container">

        {/* ── LOADING STATE: 8 skeleton cards while fetching ── */}
        {isLoading && (
          <ProductGrid>
            <Loader count={8} />
          </ProductGrid>
        )}

        {/* ── ERROR STATE: friendly message + retry button ── */}
        {!isLoading && error && (
          <ErrorMessage onRetry={retryFetch} />
        )}

        {/* ── EMPTY STATE: no products match search/filter ── */}
        {!isLoading && !error && filteredProducts.length === 0 && (
          <div className="no-results" role="status">
            <svg
              className="no-results-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <p>No products found{searchQuery ? ` for "${searchQuery}"` : ''}.</p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px' }}>
              Try adjusting your search terms or selecting a different category.
            </p>
          </div>
        )}

        {/* ── PRODUCT GRID: 1 col (mobile) / 2 col (tablet) / 4 col (desktop) ── */}
        {!isLoading && !error && filteredProducts.length > 0 && (
          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setActiveProduct(product)}
              />
            ))}
          </ProductGrid>
        )}

      </main>

      {/* ── Footer ── */}
      <footer className="app-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Dragon Shop. Crafted with React &amp; Vite.</p>
        </div>
      </footer>

      {/* ── Product Detail Modal (portal-style overlay) ── */}
      {activeProduct && (
        <ProductDetailsModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </>
  );
}

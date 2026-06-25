import { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchProducts, fetchCategories } from '../services/api';
import useDebounce from './useDebounce';

/**
 * Custom hook to load and manage products catalog
 */
export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filtering states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Debounce the search query to optimize filtering compute
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Method to fetch data from API
  const loadData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Run fetches in parallel for speed
      const [productsData, categoriesData] = await Promise.all([
        fetchProducts(),
        fetchCategories()
      ]);
      
      setProducts(productsData);
      setCategories(['all', ...categoriesData]);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred while loading products.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch on mount
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Compute filtered products locally
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // 1. Filter by category
      const matchesCategory = 
        selectedCategory === 'all' || 
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      // 2. Filter by search query
      const matchesSearch = 
        !debouncedSearchQuery.trim() || 
        product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, debouncedSearchQuery]);

  return {
    products,
    categories,
    filteredProducts,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    retryFetch: loadData
  };
}

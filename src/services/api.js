const API_BASE_URL = 'https://fakestoreapi.com';

/**
 * Helper to handle fetch responses and handle HTTP errors
 */
async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

/**
 * Fetch all products from the Fake Store API
 * @returns {Promise<Array>} Promise resolving to list of products
 */
export async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    return await handleResponse(response);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Could not retrieve products. Please check your internet connection and try again.');
  }
}

/**
 * Fetch all product categories from the Fake Store API
 * @returns {Promise<Array<string>>} Promise resolving to list of categories
 */
export async function fetchCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    return await handleResponse(response);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    // Return fallback categories if endpoint fails so the app remains functional
    return ["electronics", "jewelery", "men's clothing", "women's clothing"];
  }
}

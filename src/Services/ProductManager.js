const fetchProducts = async () => {
  return fetch('http://62.72.18.39:3000/products')
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error('Erreur lors du chargement du JSON :', error));
}

const fetchProductsById = async (id) => {
  return fetch(`http://62.72.18.39:3000/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error('Erreur lors du chargement du JSON :', error));
}

const deleteProduct = async (id) => {
  try {
    const response = await fetch(`http://62.72.18.39:3000/products/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la suppression du produit :', error);
    throw error;
  }
}

  const filterProducts = async (products, filters) => {
    let filteredProducts = products;

    if (filters.sortBy) {
      if (filters.sortBy === 'ascName') {
        return products.slice().sort((a, b) => a.name.localeCompare(b.name));
      } else if (filters.sortBy === 'descName') {
        return products.slice().sort((a, b) => b.name.localeCompare(a.name));
      } else if (filters.sortBy === 'descPrice') {
        return products.slice().sort((a, b) => b.price - a.price);
      } else if (filters.sortBy === 'ascPrice') {
        return products.slice().sort((a, b) => a.price - b.price);
      } 
    }

    if (filters.category) {
      filteredProducts = filteredProducts.filter((product) => filterByCategory(filters.category, product));
    }
  
    if (filters.brands.length > 0) {
      filteredProducts = products.filter((product) => {
        const shouldInclude = filters.brands.includes(product.brand);
        return shouldInclude;
      });
    }
  
    if (filters.color) {
      if (filters.color !== '') {
        filteredProducts = filteredProducts.filter((product) => filterByColor(filters.color, product));
      }
    }
    return filteredProducts;
  }

const filterByCategory = (categoryFilter, product) => {
  return categoryFilter ? product.category === categoryFilter : true;
}

const filterByBrand = async (brandFilters, product) => {
  return brandFilters.length === 0 || brandFilters.includes(product.brand);
}

const filterByColor = async (colorFilter, product) => {
  return colorFilter ? product.color === colorFilter : true;
}


export default fetchProducts; 

export {
  filterProducts,
  filterByCategory,
  filterByBrand,
  filterByColor,
  fetchProductsById,
  deleteProduct
};
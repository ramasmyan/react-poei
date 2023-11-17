const fetchProducts = async () => {
  return fetch('http://localhost:3000/products')
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error('Erreur lors du chargement du JSON :', error));
}

  const filterProducts = async (products, filters) => {
    let filteredProducts = [...products];

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
      filteredProducts = filteredProducts.filter(product => product.category === filters.category);
    }

    if (filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter(product => filters.brands.includes(product.brand));
    }

    if (filters.color) {
      if (filters.color !== '') {
      filteredProducts = filteredProducts.filter(product => product.color === filters.color);
      }
    }

    return filteredProducts;
}



export default fetchProducts; 

export  {
  filterProducts
};
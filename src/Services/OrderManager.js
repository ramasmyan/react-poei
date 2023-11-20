const fetchOrders = async () => {
    return fetch('http://localhost:3000/orders')
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.error('Erreur lors du chargement du JSON :', error));
  }

  export default fetchOrders; 
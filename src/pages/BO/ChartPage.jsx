import React, { useEffect, useState } from 'react';
import SideNavBar from '../../Components/BO/SideNavBar/SideNavBar';
import ChartComponent from '../../Components/BO/ChartComponent/ChartComponent';
import fetchOrders from '../../Services/OrderManager';
import fetchProducts from '../../Services/ProductManager';
import fetchUsers from '../../Services/UserManager';
import StatsCase from '../../Components/BO/StatsCase/StatsCase';

function ChartPage(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
        const fetchedOrders = await fetchOrders();
        setOrders(fetchedOrders);
    };

    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    
    const getUsers = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };

    getUsers();
    getProducts();
    getOrders();
  }, []); 

  return (
    <div>
        <SideNavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        <div className="height-100 bg-light bo-page" onClick={() => setIsSidebarOpen(false)}>
            <div className="d-flex justify-content-between mb-3">
                <h4>Dashboard</h4>
            </div>
            <StatsCase orders={orders} products={products} users={users.data} />
            <ChartComponent orders={orders} products={products} />
        </div>
    </div>
  );
}

export default ChartPage;

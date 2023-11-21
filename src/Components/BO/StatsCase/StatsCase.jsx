import React, { useEffect, useState } from 'react';
import './StatsCase.scss';

function StatsCase(props) {
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [avgOrderValue, setAvgOrderValue] = useState(0);

  useEffect(() => {
    if(props.orders) {
        setTotalOrders(props.orders.length);
        props.orders.map((order) => {
          setTotalOrderPrice(totalOrderPrice + order.totalPrice);
      })
    }


  }, [props.orders]); 

  useEffect(() => {
    if(props.users) {
        setTotalUsers(props.users.length);
    }
  }, [props.users]);
  
  useEffect(() => {
    if (totalOrders > 0) {
        const calculatedAvgOrderValue = totalOrderPrice / totalOrders;
        setAvgOrderValue(calculatedAvgOrderValue.toFixed(2));
      }
  }, [totalOrderPrice, totalOrders]);

  return (
    <div className="chart-container">
      <div className="chart-box">
        <h2>Total Order Price</h2>
        <p className='text-success'>+ {totalOrderPrice}$</p>
      </div>
      <div className="chart-box">
        <h2>Total Users</h2>
        <p>{totalUsers}</p>
      </div>
      <div className="chart-box">
        <h2>Total Orders</h2>
        <p>{totalOrders}</p>
      </div>
      <div className="chart-box">
        <h2>Average Order Value</h2>
        <p>{avgOrderValue}</p>
      </div>
    </div>
  );
}

export default StatsCase;

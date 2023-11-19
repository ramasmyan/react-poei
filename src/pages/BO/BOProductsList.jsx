import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Features/products/productsService';
import SideNavBar from '../../Components/BO/SideNavBar/SideNavBar';
import ProductsTable from '../../Components/BO/ProductsTable/ProductsTable';
import { Link } from 'react-router-dom';

function BOProductsList(props) {
  const productState = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const products = productState.data;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <SideNavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <div className="height-100 bg-light" onClick={() => setIsSidebarOpen(false)} style={{marginLeft: '140px'}}>
        <div className="d-flex justify-content-between mb-3" style={{width: '85%'}}>
          <h4>Products List</h4>
          <Link to="/admin/products/add" className="btn btn-success" style={{width: '10em'}}>
            New Product
          </Link>
        </div>
        <div className='container'>
            <ProductsTable products={products} />
        </div>
      </div>
    </div>
  );
}

export default BOProductsList;

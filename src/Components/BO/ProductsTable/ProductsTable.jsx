import React, { useEffect, useState } from 'react';
import './ProductsTable.scss';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../../Services/ProductManager';

function ProductsTable(props) {

    const [products, setProducts] = useState([]);

    const handleDelete = async (id) => {
      try {
        await deleteProduct(id);
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      } catch (error) {
        console.error('Erreur lors de la suppression du produit :', error);
      }
    };

    useEffect(() => {
      // Mettre à jour l'état initial des produits à partir des props
      setProducts(props.products);
    }, [props.products]);

  return (
    <div>
        <table className="table table-responsive table-borderless">
        
        <thead>
          <tr className="bg-light">
            <th scope="col" width="5%">#</th>
            <th scope="col" width="10%">Name</th>
            <th scope="col" width="10%">Brand</th>
            <th scope="col" width="20%">Description</th>
            <th scope="col" width="10%">Category</th>
            <th scope="col" width="5%">Price</th>
            <th scope="col" className="text-center" width="15%"><span>Action</span></th>
          </tr>
        </thead>
    <tbody>
        {
          products.length > 0 ?  
            (products.map((product, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td className="justify-content-around d-flex">
                      <Link to={`/admin/products/${product._id}`} className="btn btn-primary btn-sm mr-2 w-25 text-center a-btn-link">
                        Edit
                      </Link>
                      <button className="btn btn-danger btn-sm w-25 text-center" onClick={() => handleDelete(product._id)}>
                        Delete
                      </button>
                    </td>              
                </tr>
            ))) :
            (
              <tr key={0}>
                <td colSpan="7" className="justify-content-around d-flex">
                  Aucun produit disponible
                </td>
              </tr>
            )
        }
    </tbody>
  </table>
    </div>
  );
}

export default ProductsTable;

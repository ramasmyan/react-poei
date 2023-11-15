import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../features/products/productsService";



function Products(props) {
    const productState = useSelector(state => state.products);
    const dispatch = useDispatch();
    const products = productState.data


    React.useEffect(() => {
        dispatch(getData());
    },[dispatch])
    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map((product) => (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Products;
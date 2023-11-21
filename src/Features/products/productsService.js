import {fetchProducts, fetchProductsError, fetchProductsSuccess} from "./productsSlice";

function getData(action) {
    return function (dispatch) {
        dispatch(fetchProducts());
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(json => dispatch(fetchProductsSuccess(json)))
            .catch(error => dispatch(fetchProductsError(error)));
    }
}

export {getData}
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data: [],
    loading: false,
    error: null
};


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts: (state) => {
            state.loading = true;
        },
        fetchProductsSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchProductsError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});



const products = productsSlice.reducer;
export const {fetchProducts, fetchProductsSuccess, fetchProductsError} = productsSlice.actions;
export default products;
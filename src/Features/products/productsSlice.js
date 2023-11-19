import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ProductsServices from "./productsService";


const initialState = {
    data: [],
    isLoading: false,
    isError: null,
    message: null,
};

export const fetchAllProducts = createAsyncThunk(
    '/products',
    async (thunkAPI) => {
        try {
            console.log("fetching products")
            return await ProductsServices.getProducts();
        }catch (error) {
            const message =  (error.response.data.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => {
            state.isSuccess = false;
            state.message = null;
            state.isError = null;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload.data;
            console.log(action.payload.data)
        });
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});




const products = productsSlice.reducer;
export const {reset} = productsSlice.actions;
export default products;
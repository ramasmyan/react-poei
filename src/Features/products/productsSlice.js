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
            return await ProductsServices.getProducts();
        }catch (error) {
            let message =  (error.response.data.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => {
            state.data = [];
            state.isSuccess = false;
            state.message = null;
            state.isError = null;
            state.isLoading = false;
        },
        sortPriceUp: (state, action) => {
            console.log("action",state.data)
        },
        sortPriceDown: (state, action) => {
            state.data = action.payload.data.sort((a,b) => b.price - a.price);
        },
        sortNameUp: (state, action) => {
            state.data = action.payload.data.sort((a,b) => a.name.localeCompare(b.name));
        },
        sortNameDown: (state, action) => {
            state.data = action.payload.data.sort((a,b) => b.name.localeCompare(a.name));
        },
        filterCategory: (state, action) => {
            state.data = action.payload.data.filter(item => item.category === action.payload.category);
        },
        filterCategoryAndBrandAndColor: (state, action) => {
            state.data = action.payload.data.filter(item => item.category === action.payload.category && item.brand === action.payload.brand && item.color === action.payload.color);
        },
        getAll: (state, action) => {
            state.data = action.payload.data;
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
        });
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});




const products = productsSlice.reducer;
export const {reset,sortNameUp,sortNameDown,sortPriceUp,
sortPriceDown} = productsSlice.actions;
export default products;
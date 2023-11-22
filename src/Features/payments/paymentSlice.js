import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import OrderServices from "./paymentsService";


export const createOrder = createAsyncThunk(
    "/orders/create",
    async (order,thunkAPI) => {
        try {
            const response = await OrderServices.createOrder(order);
            return response.data;
        }catch (error) {
            const message =  (error.response.data.message || "something went wrong contact Ramzi");
            return thunkAPI.rejectWithValue(message);
        }
    }
);
export const getOrders = createAsyncThunk(
    "/orders/getOrders",
    async (thunkAPI) => {
        try {
            const response = await OrderServices.getOrders();
            return response.data;
        }catch (error) {
            const message =  (error.response.data.message || "something went wrong contact Ramzi");
            return thunkAPI.rejectWithValue(message);
        }
    }
);


const initialState = {
    orders: [],
    isLoading: false,
    isError: null,
    isSuccess: false,
    message: null,
};
const OrderSlice = createSlice({
    name: 'orders',
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
        builder.addCase(createOrder.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
        });
        builder.addCase(createOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        });
        builder.addCase(getOrders.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.orders = action.payload;
            state.message = "Orders fetched successfully";
        });
        builder.addCase(getOrders.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        });
    }

});

const orders = OrderSlice.reducer;
export const {reset} = OrderSlice.actions;
export default orders;
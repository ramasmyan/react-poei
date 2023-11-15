import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import AuthServices from "./authService";


const user = JSON.parse(localStorage.getItem('user'));

export const registerUser = createAsyncThunk(
    "/register",async (userFormData,thunkAPI) => {
        try {
            return  await AuthServices.registerUser(userFormData);
        } catch (error) {
            const message = (error.error && error.error.message) || error.message || error.error;
            return thunkAPI.rejectWithValue(message);
        }
    })

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isError: null,
    isSuccess: false,
    message: null,
};



const auhtSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            localStorage.removeItem('user');
            state.user = null;
            state.isSuccess = false;
            state.message = null;
            state.isError = null;
            state.isLoading = false;
        }
    },
    extraReducers: {

    }
});
const auth = auhtSlice.reducer

export const {reset} = auhtSlice.actions;

export default auth;
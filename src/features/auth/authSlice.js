import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import AuthServices from "./authService";


const user = JSON.parse(localStorage.getItem('user'));

export const registerUser = createAsyncThunk(
    "/register",async (userFormData,thunkAPI) => {
        try {
           return await AuthServices.registerUser(userFormData);
        } catch (error) {
            const message =  "Something went wrong";
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
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true;
            console.log("authSlice","ici")
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            console.log("authSlice 2",action.payload)
            state.message = action.payload.message;
            state.user = action.payload.user;
            localStorage.setItem('user',JSON.stringify(action.payload.data));
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            console.log("authSliceError",action.payload)
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});
const auth = auhtSlice.reducer

export const {reset} = auhtSlice.actions;

export default auth;
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import AuthServices from "./authService";


const user = JSON.parse(localStorage.getItem('user'));

export const registerUser = createAsyncThunk(
    "/register",async (userFormData,thunkAPI) => {
        try {
           return await AuthServices.registerUser(userFormData);
        } catch (error) {
            const message =  (error.response.data.message || "something went wrong contact Ramzi");
            return thunkAPI.rejectWithValue(message);
        }
    })

export const loginUser = createAsyncThunk(
    "/login",async (userFormData,thunkAPI) => {
        try {
            return await AuthServices.loginUser(userFormData);
        } catch (error) {
            const message =  (error.response.data.message);
            return thunkAPI.rejectWithValue(message);
        }
    })

export const logoutUser
    = createAsyncThunk(
    "/logout",async () => {
             await AuthServices.logout();
    }
)

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
            state.isSuccess = false;
            state.message = null;
            state.isError = null;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            console.log("authSlice 2",action.payload)
            state.message = action.payload.message;
            state.user = action.payload.user;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload.message;
            state.user = action.payload.data;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        builder.addCase(logoutUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = "logout successfully";
            state.user = null;
        });
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});
const auth = auhtSlice.reducer

export const {reset} = auhtSlice.actions;

export default auth;
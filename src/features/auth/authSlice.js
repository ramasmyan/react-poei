import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import register from "./authService";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (userData, {rejectWithValue}) => {
        try {
            const response = await register(userData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    user: null,
    loading: false,
    error: null,
    success: false,
};
import {createSlice} from '@reduxjs/toolkit';


const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
        increment: (state, action) => {
            return state + action.payload;
        },
        decrement: (state, action) => {
            return state - action.payload;
        },
        reset: () => {
            return 0;
        }
    }
});
const counter = countSlice.reducer;
export const {increment, decrement, reset} = countSlice.actions;
export default counter;


import { createSlice } from '@reduxjs/toolkit';
const initState = {
	cart: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initState,
	reducers: {},
});

export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
const initState = {
	cart: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initState,
	reducers: {
		setCart(state, action) {
			state.cart = [...state.cart, action.payload];
		},
		removeItem(state, action) {
			state.cart = state.cart.filter(item => item.id !== action.payload);
		},
		clearCart(state) {
			state.cart = [];
		},
		changeCartItem(state, action) {
			state.cart = state.cart.map(item => {
				if (item.id === action.payload.id) {
					item.count = action.payload.counter;
					return item;
				} else {
					return item;
				}
			});
		},
	},
});

export default cartSlice.reducer;

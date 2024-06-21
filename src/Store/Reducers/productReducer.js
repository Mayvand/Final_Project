import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchProducts from '../Actions/getProducts';
import axios from 'axios';

const initState = {
	loading: false,
	products: null,
	error: null,
	hello: '',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState: initState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.loading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.products = action.payload.products;
				state.hello = 'hello;';
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				if (axios.isAxiosError(action.payload)) {
					state.error = action.payload.message;
				}
				state.hello = 'not hello';
			});
	},
});

export default productsSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import httpClient from '../../Utils/httpClient';

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	const resp = httpClient.get('/products');
	return (await resp).data;
});

export default fetchProducts;

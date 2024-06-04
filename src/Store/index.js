import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './Reducers';

export const setupStore = () =>
	configureStore({
		reducer: rootReducer,
	});

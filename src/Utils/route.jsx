import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../Components/Header';

export const baseRouter = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [],
	},
]);

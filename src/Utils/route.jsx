import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../Components/Header';

const Home = lazy(() => import('../Pages/Home'));
const Catalog = lazy(() => import('../Pages/Catalog'));
const Cart = lazy(() => import('../Pages/Cart'));
const ProductPage = lazy(() => import('../Pages/ProductPage'));

export const baseRouter = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Home />
					</Suspense>
				),
			},
			{
				path: '/catalog',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Catalog />
					</Suspense>
				),
			},
			{
				path: '/cart',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Cart />
					</Suspense>
				),
			},
			{
				path: '/catalog/:id',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<ProductPage />
					</Suspense>
				),
			},
		],
	},
]);

import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../Components/Header';

const Home = lazy(() => import('../Pages/Home'));

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
		],
	},
]);

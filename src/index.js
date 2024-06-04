import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { baseRouter } from './Utils/route';
import { setupStore } from './Store';
import { Provider } from 'react-redux';

const store = setupStore();

const { getState } = store;
console.log(getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={baseRouter} />
		</Provider>
	</React.StrictMode>
);

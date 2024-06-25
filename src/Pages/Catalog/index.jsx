import React, { useEffect } from 'react';
import s from './catalog.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../Store/Actions/getProducts';
import CatalogItem from '../../Components/CatalogItem';

const Catalog = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const { loading, products } = useSelector(state => state.products);

	return (
		<main>
			<section className={s.container}>
				<h1>Catalog</h1>
				{loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
				<div className={s.catalogItems}>
					{products &&
						products.map(item => (
							<CatalogItem item={item} key={item.id} className={s.item} />
						))}
				</div>
			</section>
		</main>
	);
};

export default Catalog;

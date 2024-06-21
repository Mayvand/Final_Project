import React from 'react';
import PromoSection from '../../Components/PromoSection';
import PresentationSection from '../../Components/PresentationSection';
import ProductSlider from '../../Components/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../Store/Actions/getProducts';
import { useEffect } from 'react';
import OurProducts from '../../Components/OurProducts';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	const { products } = useSelector(state => state.products);

	console.log(products);

	return (
		<>
			{products && (
				<>
					<PromoSection />
					<PresentationSection />
					<ProductSlider />
					<OurProducts />
				</>
			)}
		</>
	);
};

export default Home;

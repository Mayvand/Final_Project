import React from 'react';
import PromoSection from '../../Components/PromoSection';
import PresentationSection from '../../Components/PresentationSection';
import ProductSlider from '../../Components/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../Store/Actions/getProducts';
import { useEffect } from 'react';
import OurProducts from '../../Components/OurProducts';
import PhotosBlock from '../../Components/PhotosBlock';
import s from './home.module.scss';
import Footer from '../../Components/Footer';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	const { products } = useSelector(state => state.products);

	console.log(products);

	return (
		<main>
			{products && (
				<>
					<PromoSection />
					<PresentationSection />
					<ProductSlider />
					<OurProducts />
					<PhotosBlock />
					<Footer />
				</>
			)}
		</main>
	);
};

export default Home;

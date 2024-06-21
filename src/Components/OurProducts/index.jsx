import React from 'react';
import s from './ourproducts.module.scss';
import Photo from '../../Assets/ourProductsImage.png';
import OurProductsSlider from '../OurProductsSlider';

const OurProducts = () => {
	return (
		<section className={s.container}>
			<div className={s.mainBlock}>
				<h3>GAME-CHANGING VITAMINS</h3>
				<h1>OUR PRODUCTS ARE</h1>
				<p>
					Low in sugar (sweetened with a fruit base) Free from gluten, gelatine,
					dairy, egg,nutsor soy Free from artificial flavours or colours Vegan
					friendly It is a long established fact that a reader will be
					distracted by the Free from artificial flavours or colours Vegan
					friendly It is a long established fact that a reader will be
					distracted by the...
				</p>
				<OurProductsSlider className={s.slider} />
			</div>
			<div className={s.imageBlock}>
				<div className={s.rectangle}></div>
				<img src={Photo} alt='Women' />
			</div>
		</section>
	);
};

export default OurProducts;

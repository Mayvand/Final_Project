import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';

import s from './productslider.module.scss';

import { Mousewheel, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import ProductSliderItem from '../ProductSliderItem';

const ProductSlider = () => {
	const { products } = useSelector(state => state.products);

	const pagination = {
		clickable: true,
		dynamicBullets: true,
		renderBullet: function (index, className) {
			return '<span class=' + className + '></span>';
		},
	};

	return (
		<>
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				className={s.swiper}
			>
				{products.map((slide, index) => (
					<SwiperSlide className={s.swiperSlide}>
						<ProductSliderItem
							key={index}
							image={slide.thumbnail}
							title={slide.title}
							price={slide.price}
							discount={slide.discountPercentage}
							description={slide.description}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default ProductSlider;

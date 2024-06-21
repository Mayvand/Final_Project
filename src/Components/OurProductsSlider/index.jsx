import React from 'react';
import { useSelector } from 'react-redux';
import { useSpringCarousel } from 'react-spring-carousel';
import OurProductsSliderItem from '../OurProductsSliderItem';
import s from './ourproductsslider.module.scss';
import BaseButton from '../BaseButton';
import { ReactComponent as Next } from '../../Assets/SliderNavNext_icon.svg';
import { ReactComponent as Prev } from '../../Assets/SliderNavPrev_icon.svg';

const OurProductsSlider = () => {
	const { products } = useSelector(state => state.products);

	const { carouselFragment, slideToPrevItem, slideToNextItem } =
		useSpringCarousel({
			itemsPerSlide: 3,
			withLoop: true,
			items: products.map((item, index) => ({
				id: index,
				initialStartingPosition: 'center',
				gutter: 24,
				renderItem: (
					<OurProductsSliderItem
						index={index}
						image={item.thumbnail}
						title={item.title}
						price={item.price}
						discount={item.discountPercentage}
					/>
				),
			})),
		});

	return (
		<div className={s.sliderWrapper}>
			<BaseButton
				icon={<Prev />}
				className={s.prev}
				onClick={slideToPrevItem}
			/>
			<div className={s.wrapper}>{carouselFragment}</div>
			<BaseButton
				icon={<Next />}
				className={s.next}
				onClick={slideToNextItem}
			/>
		</div>
	);
};

export default OurProductsSlider;

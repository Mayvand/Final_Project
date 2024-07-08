import React from 'react';
import s from './productslideritem.module.scss';
import BaseButton from '../BaseButton';

const ProductSliderItem = props => {
	const { image, title, price, discount, description } = props;

	return (
		<div className={s.itemWrapper}>
			<div className={s.imgWrapper}>
				<img src={image} alt='' />
			</div>
			<div className={s.infoBlock}>
				<h2>{title}</h2>
				<div className={s.priceBlock}>
					<span className={s.newPrice}>
						{((+price * (100 - discount)) / 100).toFixed(2) + ' $'}
					</span>
					<span className={s.oldPrice}>{price + ' $'}</span>
				</div>
				<p className={s.description}>{description}</p>
				<BaseButton className={s.sliderButton} value='SHOP NOW' />
			</div>
		</div>
	);
};

export default ProductSliderItem;

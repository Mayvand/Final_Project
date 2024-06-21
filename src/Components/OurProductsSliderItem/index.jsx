import React from 'react';
import s from './ourproductsslideritem.module.scss';

const OurProductsSliderItem = props => {
	const { image, title, price, discount, index } = props;

	return (
		<div key={index} className={s.itemWrapper}>
			<img src={image} alt='product' />
			<h2>{title}</h2>
			<div className={s.priceBlock}>
				<span className={s.newPrice}>{price}</span>
				<span className={s.oldPrice}>
					{((+price * (100 - discount)) / 100).toFixed(2)}
				</span>
			</div>
		</div>
	);
};

export default OurProductsSliderItem;

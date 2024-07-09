import React from 'react';
import s from './productslideritem.module.scss';
import BaseButton from '../BaseButton';
import { useNavigate } from 'react-router-dom';

const ProductSliderItem = props => {
	const { image, title, price, discount, description, id } = props;

	const navigate = useNavigate();

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
				<BaseButton
					className={s.sliderButton}
					value='SHOP NOW'
					onClick={() => navigate(`/catalog/${id}`)}
				/>
			</div>
		</div>
	);
};

export default ProductSliderItem;

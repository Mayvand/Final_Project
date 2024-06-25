import React from 'react';
import s from './cartitem.module.scss';

const CartItem = props => {
	const { item } = props;

	return (
		<div className={s.item}>
			<div className={s.image}>
				<img src={item.thumbnail} alt='img' />
			</div>
			<div className={s.itemInfo}>
				<h3 className={item.title}>{item.title}</h3>
				<p className={s.warranty}>{item.warrantyInformation}</p>
				<p className={s.returnPolicy}>{item.returnPolicy}</p>
			</div>
			<div className={s.priceBlock}>
				<p className={s.newPrice}>{item.price + '$'}</p>
				<p className={s.oldPrice}>
					{((+item.price * (100 - item.discountPercentage)) / 100).toFixed(2) +
						'$'}
				</p>
			</div>
		</div>
	);
};

export default CartItem;

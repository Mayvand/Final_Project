import React from 'react';
import s from './cartitem.module.scss';
import CounterButton from '../CounterButton';

const CartItem = props => {
	const { item } = props;

	return (
		<div className={s.item}>
			<div className={s.image}>
				<img src={item.thumbnail} alt='img' />
			</div>
			<div className={s.itemInfo}>
				<h3 className={s.title}>{item.title}</h3>
				<p className={s.warranty}>{item.warrantyInformation}</p>
				<p className={s.returnPolicy}>{item.returnPolicy}</p>
			</div>

			<div>
				<div className={s.priceBlock}>
					<p className={s.newPrice}>
						{(
							(+item.price * (100 - item.discountPercentage) * item.count) /
							100
						).toFixed(2) + '$'}
					</p>
					<p className={s.oldPrice}>
						{(item.price * item.count).toFixed(2) + '$'}
					</p>
				</div>
				<CounterButton id={item.id} />
			</div>
		</div>
	);
};

export default CartItem;

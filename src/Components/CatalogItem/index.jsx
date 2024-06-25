import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import s from './catalogitem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import BaseButton from '../BaseButton';
import classNames from 'classnames';
import { cartSlice } from '../../Store/Reducers/cartReducer';

const CatalogItem = props => {
	const { item, link } = props;

	const dispatch = useDispatch();
	const { cart } = useSelector(state => state.cart);
	const [disable, setDisable] = useState(false);

	useEffect(() => {
		if (cart) {
			const state = cart.some(cartItem => cartItem.id === item.id);
			setDisable(state);
		}
	}, [cart, item.id]);

	return (
		<div className={s.mainClass}>
			<div className={s.categoryBlock}>
				<p className={s.category}>{item.category}</p>
				<Rating value={item.rating} readOnly precision={0.5} size='large' />
			</div>
			<div className={s.img} onClick={link}>
				<img src={item.thumbnail} alt='img' />
			</div>
			<h3 className={s.title} onClick={link}>
				{item.title}
			</h3>
			<div className={s.priceBlock}>
				<p className={s.newPrice}>{item.price + '$'}</p>
				<p className={s.oldPrice}>
					{((+item.price * (100 - item.discountPercentage)) / 100).toFixed(2) +
						'$'}
				</p>
			</div>

			{!disable && (
				<BaseButton
					className={classNames(s.button, disable ? s.buttonDis : '')}
					disabled={disable}
					value={disable ? 'Added' : 'Add to cart'}
					onClick={() =>
						dispatch(cartSlice.actions.setCart({ ...item, count: 1 }))
					}
				/>
			)}
			{/* 
            при добавлении количества товаров надо активировать строку
             {disable && <CounterButton id={item.id} />} 
             */}
		</div>
	);
};

export default CatalogItem;

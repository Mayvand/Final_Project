import React, { useEffect, useState } from 'react';
import BaseButton from '../BaseButton';
import { cartSlice } from '../../Store/Reducers/cartReducer';
import s from './counterbutton.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const CounterButton = props => {
	const { id } = props;
	const { cart } = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const [counter, setCounter] = useState(1);

	const changeCounter = property => {
		const { direction, value } = property;
		if (direction) {
			setCounter(counter + 1);
		} else {
			if (counter > 1) {
				setCounter(counter - 1);
			} else {
				dispatch(cartSlice.actions.removeItem(id));
			}
		}
		if (!isNaN(+value)) {
			+value > 0
				? setCounter(+value)
				: dispatch(cartSlice.actions.removeItem(id));
		}
	};

	useEffect(() => {
		if (cart) {
			const item = cart.find(item => item.id === id);
			if (item) setCounter(item.count);
		}
	}, [cart, id]);

	useEffect(() => {
		if (cart && counter > 1) {
			const item = cart.find(item => item.id === id);
			if (!item) return;
			dispatch(cartSlice.actions.changeCartItem({ id, counter }));
		}
		console.log(cart[id - 1]);
	}, [counter]);

	return (
		<div className={s.buttonContainer}>
			<BaseButton
				className={`${s.button} ${s.left}`}
				onClick={() => changeCounter({ direction: false })}
				value='-'
			/>
			<input
				type='text'
				className={s.input}
				value={counter}
				onChange={e => changeCounter({ value: e.target.value })}
			/>
			<BaseButton
				className={`${s.button} ${s.right}`}
				value='+'
				onClick={() => changeCounter({ direction: true })}
			/>
		</div>
	);
};

export default CounterButton;

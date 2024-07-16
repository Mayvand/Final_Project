import React, { useEffect, useState } from 'react';
import BaseButton from '../BaseButton';
import { cartSlice } from '../../Store/Reducers/cartReducer';
import s from './counterbutton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

const CounterButton = props => {
	const { id, className } = props;
	const { cart } = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const [counter, setCounter] = useState(1);

	const mainClass = classNames(className, s.button);

	const changeCounter = property => {
		const { direction, value } = property;
		console.log(value);
		if (direction) {
			setCounter(counter + 1);
		} else if (direction === false) {
			if (counter > 1) {
				setCounter(counter - 1);
			} else if (counter === 1) {
				dispatch(cartSlice.actions.removeItem(id));
				console.log('удаляю' + id);
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
	}, []);

	useEffect(() => {
		if (cart && counter > 0) {
			const item = cart.find(item => item.id === id);
			if (!item) return;
			dispatch(cartSlice.actions.changeCartItem({ id, counter }));
		}
	}, [counter]);

	return (
		<div className={`${s.buttonContainer} ${mainClass}`}>
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

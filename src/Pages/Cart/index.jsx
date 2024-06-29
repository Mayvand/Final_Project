import React, { useEffect } from 'react';
import s from './cart.module.scss';
import { useSelector } from 'react-redux';
import BaseButton from '../../Components/BaseButton';
import CartItem from '../../Components/CartItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
	const { cart } = useSelector(state => state.cart);
	const navigate = useNavigate();
	const [totalPrice, setTotalPrice] = useState(0);
	const [discount, setDiscount] = useState(0);

	useEffect(() => {
		if (cart.length) {
			const priceArr = cart.map(item =>
				(
					(+item.price * (100 - item.discountPercentage) * item.count) /
					100
				).toFixed(2)
			);
			const price = priceArr.reduce((acc, item) => {
				return acc + +item;
			}, 0);
			setTotalPrice(price.toFixed(2));

			const oldPrice = cart.reduce(
				(acc, item) => acc + item.price * item.count,
				0
			);

			setDiscount((+oldPrice - +price).toFixed(2));
		}
	}, [cart]);
	return (
		<main className={s.cart}>
			<h2 className={s.title}>shopping cart</h2>
			<section className={s.container}>
				{!cart.length && (
					<>
						<p className={s.empty}>The shopping cart is empty.</p>
						<BaseButton
							className={s.openModal}
							onClick={() => navigate('/catalog')}
							value={'continue shopping'}
						/>
					</>
				)}
				{!!cart.length && (
					<>
						<div className={s.cartItems}>
							{cart.map(item => (
								<CartItem item={item} className={s.cartItem} />
							))}
						</div>
						<div className={s.totalBlock}>
							<div className={s.totalInfo}>
								<h1>Summary</h1>
								<div className={s.totalPrice}>
									<h3>Total price</h3>
									<p className={s.totalPrice}>{'$ ' + totalPrice}</p>
								</div>

								<div className={s.discount}>
									<h3>Total discount</h3>
									<p className={s.totalDiscount}>{'$ ' + discount}</p>
								</div>
							</div>
							<BaseButton
								className={s.openModal}
								// onClick={() => setModal(true)} активировать когда добавишь модалку + обратную связь
								value={'order products'}
							/>
						</div>
					</>
				)}
			</section>
		</main>
	);
};

export default Cart;

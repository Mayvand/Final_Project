import React from 'react';
import s from './cart.module.scss';
import { useSelector } from 'react-redux';
import BaseButton from '../../Components/BaseButton';
import CartItem from '../../Components/CartItem';

const Cart = () => {
	const { cart } = useSelector(state => state.cart);

	return (
		<main className={s.cart}>
			<section className={s.container}>
				<h2 className={s.title}>shopping cart</h2>
				{!cart.length && <p className={s.empty}>The shopping cart is empty</p>}
				{!!cart.length && (
					<div className={s.cartItems}>
						{cart.map(item => (
							<CartItem item={item} className={s.cartItem} />
						))}
					</div>
				)}
				<BaseButton
					className={s.openModal}
					// onClick={() => setModal(true)} активировать когда добавишь модалку + обратную связь
					value={!!cart.length ? 'order products' : 'continue shopping'}
				/>
			</section>
		</main>
	);
};

export default Cart;

import React, { useEffect, useState } from 'react';
import s from './productpage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import BaseButton from '../../Components/BaseButton';
import CounterButton from '../../Components/CounterButton';
import { cartSlice } from '../../Store/Reducers/cartReducer';
import { ReactComponent as Arrow } from '../../Assets/Arrow_icon.svg';
import Reviews from '../../Components/Reviews';

const ProductPage = () => {
	const { products, loading } = useSelector(state => state.products);
	const { cart } = useSelector(state => state.cart);
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();

	const [product, setProduct] = useState(null);
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		if (cart.length > 0 && id) {
			setFlag(cart.some(item => item.id === +id));
		} else {
			setFlag(false);
		}
	}, [cart, products]);

	useEffect(() => {
		if (products && id) {
			setProduct(products.find(item => item.id === +id) ?? null);
		}
	}, [products]);

	return (
		<main className={s.product}>
			{loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
			{product && (
				<div className={s.container}>
					<div className={s.image}>
						<div className={s.back} onClick={() => navigate(`/catalog`)}>
							<BaseButton icon={<Arrow />} className={s.backButton} />
							<p className={s.backText}>Back to shop</p>
						</div>
						<img src={product.images[0]} alt={product.title} />
					</div>
					<div className={s.productInfo}>
						<h2 className={s.title}>{product.title}</h2>
						<div className={s.priceBlock}>
							<p className={s.newPrice}>
								{(
									(+product.price * (100 - product.discountPercentage)) /
									100
								).toFixed(2) + ' $'}
							</p>
							<p className={s.oldPrice}>{product.price + ' $'}</p>
						</div>
						<div className={s.rating}>
							<Rating
								value={product.rating}
								readOnly
								precision={0.5}
								size='large'
							/>
							<p className={s.averageRating}>{product.rating}</p>
						</div>
						<p className={s.category}>{product.category}</p>
						<p className={s.description}>{product.description}</p>
						{!flag && (
							<BaseButton
								disabled={flag}
								onClick={() =>
									dispatch(cartSlice.actions.setCart({ ...product, count: 1 }))
								}
								value='Add to cart'
								className={s.button}
							/>
						)}
						{flag && (
							<CounterButton className={s.counterButton} id={product.id} />
						)}

						<Reviews reviews={product.reviews} />
					</div>
				</div>
			)}
		</main>
	);
};

export default ProductPage;

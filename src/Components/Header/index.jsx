import React, { useEffect, useState } from 'react';
import s from './header.module.scss';
import { ReactComponent as Cart } from '../../Assets/Cart_icon.svg';
import { ReactComponent as Burger } from '../../Assets/Burger_icon.svg';
import BaseButton from '../BaseButton';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../Store/Actions/getProducts';
import classNames from 'classnames';

const Header = () => {
	const { cart } = useSelector(state => state.cart);

	const [isOpen, setOpen] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const active = classNames(s.active, s.nav);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<>
			<header className={s.header}>
				<div className={s.container}>
					<div className={s.logo}>
						<h1 className={s.logoText} onClick={() => navigate(`/`)}>
							GOOD<span>4</span>ME.
						</h1>
					</div>
					<nav className={isOpen ? active : s.nav}>
						<ul>
							<li>
								<Link to={'/'}>HOME</Link>
							</li>
							<li>
								<Link to={'/catalog'}>SHOP</Link>
							</li>
						</ul>
					</nav>
					<div className={s.icons}>
						<BaseButton
							onClick={() => navigate('/cart')}
							className={s.Cart}
							icon={<Cart />}
							counter={cart.length}
						/>
					</div>
					<BaseButton
						className={s.burger}
						onClick={() => setOpen(!isOpen)}
						icon={<Burger />}
					/>
				</div>
			</header>

			<Outlet />
		</>
	);
};

export default Header;

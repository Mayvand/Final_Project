import React, { useEffect } from 'react';
import s from './header.module.scss';
import { ReactComponent as Cart } from '../../Assets/Cart_icon.svg';
import { ReactComponent as Login } from '../../Assets/Login_icon.svg';
import { ReactComponent as Search } from '../../Assets/Search_icon.svg';
import BaseButton from '../BaseButton';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../Store/Actions/getProducts';

const Header = () => {
	const { cart } = useSelector(state => state.cart);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<>
			<header className={s.header}>
				<div className={s.container}>
					<div className={s.logo}>
						<h1 className={s.logoText}>
							GOOD<span>4</span>ME.
						</h1>
					</div>
					<nav className={s.nav}>
						<ul>
							<li>
								<Link to={'/'}>HOME</Link>
							</li>
							<li>
								<Link to={'/catalog'}>SHOP</Link>
							</li>
							<li>
								<Link to={'/'}>FAQ'S</Link>
							</li>
							<li>
								<Link to={'/'}>CONTACT</Link>
							</li>
						</ul>
					</nav>
					<div className={s.icons}>
						<BaseButton className={s.Search} icon={<Search />} />
						<BaseButton className={s.Login} icon={<Login />} />
						<BaseButton
							onClick={() => navigate('/cart')}
							className={s.Cart}
							icon={<Cart />}
							counter={cart.length}
						/>
					</div>
				</div>
			</header>

			<Outlet />
		</>
	);
};

export default Header;

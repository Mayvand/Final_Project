import React, { useEffect } from 'react';
import s from './header.module.scss';
import { ReactComponent as Cart } from '../../Assets/Cart_icon.svg';
import { ReactComponent as Login } from '../../Assets/Login_icon.svg';
import { ReactComponent as Search } from '../../Assets/Search_icon.svg';
import BaseButton from '../BaseButton';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchProducts from '../../Store/Actions/getProducts';

const Header = () => {
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
							<li>HOME</li>
							<li>SHOP</li>
							<li>FAQ'S</li>
							<li>CONTACT</li>
						</ul>
					</nav>
					<div className={s.icons}>
						<BaseButton className={s.Search} icon={<Search />} />
						<BaseButton className={s.Login} icon={<Login />} />
						<BaseButton className={s.Cart} icon={<Cart />} />
					</div>
				</div>
			</header>

			<Outlet />
		</>
	);
};

export default Header;

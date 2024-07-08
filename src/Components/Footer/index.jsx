import React from 'react';
import s from './footer.module.scss';
import BaseButton from '../BaseButton';
import { ReactComponent as Fb } from '../../Assets/fb_icon.svg';
import { ReactComponent as Inst } from '../../Assets/inst_icon.svg';
import { ReactComponent as Tw } from '../../Assets/tw_icon.svg';
import { ReactComponent as Pint } from '../../Assets/pint_icon.svg';
import { ReactComponent as Yt } from '../../Assets/yt_icon.svg';
import Pay from '../../Assets/payIcons.png';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.top}>
				<div className={s.leftBlock}>
					<h2 className={s.leftTitle}>GOOD4ME</h2>
					<p className={s.leftText}>
						Good health is important, so all of our products have been carefully
						designed to bring out the best in you.
					</p>
				</div>
				<div className={s.middleBlock}>
					<h2 className={s.middleTitle}>Keep In Touch</h2>
					<p className={s.middleText}>
						Subscribe to receive new product updates, be the first to know about
						sales, and more.
					</p>
					<form>
						<input type='text' placeholder='Enter your email address' />
						<BaseButton className={s.button} type='submit' value='SUBSCRIBE' />
					</form>
				</div>
				<div className={s.rightBlock}>
					<h2 className={s.rightTitle}>MORE INFO</h2>
					<ul className={s.list}>
						<li>Shipping & Deliver</li>
						<li>Refund Policy</li>
						<li>Partner Program</li>
						<li>Wholesale Portal</li>
						<li>You Buy, We Donate</li>
						<li>Privacy Policy</li>
						<li>Terms & Condition</li>
					</ul>
				</div>
			</div>

			<div className={s.bot}>
				<div className={s.socialIcons}>
					<Fb />
					<Inst />
					<Tw />
					<Pint />
					<Yt />
				</div>

				<div className={s.info}>
					© 2024, <span className={s.accent}>GOOD4ME</span>. Made by Mayvand
					Urya
				</div>
				<div className={s.payIcons}>
					<img src={Pay} alt='pay' />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

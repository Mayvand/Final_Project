import React from 'react';
import s from './promosection.module.scss';
import BaseButton from '../BaseButton';
import { useSelector } from 'react-redux';
import AdvantageCard from '../AdvantageCard';
import { ReactComponent as Shield } from '../../Assets/Advantage1_icon.svg';
import { ReactComponent as Ecology } from '../../Assets/Advantage2_icon.svg';
import { ReactComponent as Lab } from '../../Assets/Advantage3_icon.svg';

const PromoSection = () => {
	const { products, loading } = useSelector(state => state.products);

	return (
		<div className={s.container}>
			{loading && <div style={{ textAlign: 'center' }}>Loading...</div>}

			<section className={s.promoSection}>
				<div className={s.promoLeft}>
					<h3 className={s.shopName}>Good4Me</h3>
					<h2 className={s.productTitle}>{products[3].title}</h2>
					<h2 className={s.productTitle}>{products[3].warrantyInformation}</h2>
					<p className={s.productDescription}>{products[3].description}</p>
					<BaseButton className={s.button} value='SHOP NOW' />
				</div>

				<div className={s.promoRight}>
					<img src={products[3].thumbnail} alt='productimage' />
				</div>
			</section>
			<section className={s.advantages}>
				<div className={s.words}>
					<ul>
						<li>gluten free</li>
						<li>vegan friendly</li>
						<li>no nasties</li>
						<li>pectinbase</li>
					</ul>
				</div>
				<h2 className={s.advantagesTitle}>
					We Have The Main Process to Run The GOOD4ME
				</h2>
				<div className={s.cards}>
					<AdvantageCard
						icon={<Shield />}
						title='Quality Assured'
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
					/>
					<AdvantageCard
						icon={<Ecology fill='#454545' />}
						title='Clean Ingredients'
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
					/>
					<AdvantageCard
						icon={<Lab />}
						title='Chemical Free'
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
					/>
				</div>
			</section>
		</div>
	);
};

export default PromoSection;

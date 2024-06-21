import React from 'react';
import s from './advantagecard.module.scss';

const AdvantageCard = props => {
	const { icon, title, text } = props;

	return (
		<div className={s.cardContainer}>
			<div className={s.imgContainer}>{icon}</div>
			<div className={s.textContainer}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default AdvantageCard;

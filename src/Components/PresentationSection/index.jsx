import React from 'react';
import s from './presentationsection.module.scss';
import BaseButton from '../BaseButton';
import Photo from '../../Assets/presentationImage.png';
import { useNavigate } from 'react-router-dom';

const PresentationSection = () => {
	const navigate = useNavigate();
	return (
		<section className={s.container}>
			<h1 className={s.presentationTitle}>TAKE CONTROL OF YOUR HEALTH</h1>

			<div className={s.mainBlock}>
				<div className={s.backgroundBlock}></div>
				<div className={s.textBlock}>
					<div>
						<h3>It is a long established fact that a reader</h3>
						<p>
							It is a long established fact that a reader will be distracted by
							the...
						</p>
					</div>
					<div>
						<h3>This a long established fact that.</h3>
						<p>
							It is a long established fact that a reader will be distracted by
							the...
						</p>
					</div>
					<div>
						<h3>We a long established fact that as.</h3>
						<p>
							It is a long established fact that a reader will be distracted by
							the...
						</p>
					</div>
					<div>
						<h3>This a long established fact that long.</h3>
						<p>
							It is a long established fact that a reader will be distracted by
							the...
						</p>
					</div>
				</div>
				<div className={s.imageBlock}>
					<img src={Photo} alt='' />
				</div>
				<div className={s.descriptionBlock}>
					<p>
						The Good4Me range has been formulated based on scientific. Our
						vitamins are here and ready to boost your mood, immunity and overall
						well-being!
					</p>
					<p>
						Our vitamins are here and ready to boost your mood. New Zealand from
						local and imported ingredients.
					</p>
					<BaseButton
						value='BROWSE OUR RANGE'
						className={s.button}
						onClick={() => navigate('/catalog')}
					/>
				</div>
			</div>
		</section>
	);
};

export default PresentationSection;

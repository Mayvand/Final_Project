import React from 'react';
import s from './photosblock.module.scss';
import photo1 from '../../Assets/photo1.png';
import photo2 from '../../Assets/photo2.png';
import photo3 from '../../Assets/photo3.png';
import photo4 from '../../Assets/photo4.png';
import photo5 from '../../Assets/photo5.png';

const PhotosBlock = () => {
	return (
		<section className={s.container}>
			<div className={s.imgContainer}>
				<img className={s.item} src={photo1} alt='' />
				<img className={s.item} src={photo2} alt='' />
				<img className={s.item} src={photo3} alt='' />
				<img className={s.item} src={photo4} alt='' />
				<img className={s.item} src={photo5} alt='' />
			</div>
			<h1 className={s.title}>@GOODFORME</h1>
		</section>
	);
};

export default PhotosBlock;

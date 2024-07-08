import React from 'react';
import s from './reviews.module.scss';
import { Rating } from '@mui/material';

const Reviews = props => {
	const { reviews } = props;

	function formatDate(dateString) {
		const date = new Date(dateString);

		const options = {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		};

		const formattedDate = date.toLocaleString('en-US', options);

		return formattedDate;
	}

	console.log(reviews);

	return (
		<div className={s.reviews}>
			<h2 className={s.title}>Recent reviews</h2>
			{reviews.map((review, index) => (
				<div key={index} className={s.reviewItem}>
					<div className={s.info}>
						<p className={s.date}>{formatDate(review.date)}</p>
						<Rating
							value={+review.rating}
							readOnly
							precision={0.5}
							size='medium'
						/>
					</div>
					<div className={s.text}>
						<h3 className={s.author}>{review.reviewerName}</h3>
						<p className={s.reviewText}>{review.comment}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Reviews;

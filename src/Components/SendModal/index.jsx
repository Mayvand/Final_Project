import React from 'react';
import s from './sendmodal.module.scss';
import { useFormik } from 'formik';
import BaseButton from '../BaseButton';
import { ReactComponent as Close } from '../../Assets/Close_icon.svg';

const SendModal = props => {
	const { open, setOpen, setFormData } = props;

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
		onSubmit: values => {
			console.log(values);
			setFormData(values);
			setOpen(false);
		},
	});

	const { handleSubmit, handleChange } = formik;

	const handleClose = e => {
		const target = e.target;
		if (
			target.parentElement?.classList.contains(s.close) ||
			target.classList.contains(s.modal)
		) {
			setOpen(false);
		}
	};

	if (!open) return null;

	return (
		<div className={s.modal} onClick={handleClose}>
			<div className={s.modalConteitner}>
				<div className={s.header}>
					<p className={s.title}>Order Registration</p>
					<BaseButton className={s.close} icon={<Close />} />
				</div>
				<div className={s.body}>
					<form onSubmit={handleSubmit} className={s.form}>
						<input
							name='name'
							type='text'
							onChange={handleChange}
							placeholder='Name'
						/>
						<input
							name='email'
							type='email'
							onChange={handleChange}
							placeholder='Email'
						/>
						<input
							name='phone'
							type='tel'
							onChange={handleChange}
							placeholder='Phone'
						/>
						<textarea
							name='message'
							onChange={handleChange}
							placeholder='Message'
						></textarea>
						<BaseButton className={s.sendButton} type='submit' value='Send' />
					</form>
				</div>
			</div>
		</div>
	);
};

export default SendModal;

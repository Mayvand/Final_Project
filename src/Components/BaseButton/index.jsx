import React from 'react';
import classNames from 'classnames';
import style from './basebutton.module.scss';

const BaseButton = props => {
	const { className, onClick, value, icon, disabled, type } = props;

	const mainClass = classNames(className, style.button);

	return (
		<button
			type={type ? type : 'button'}
			className={mainClass}
			onClick={onClick}
			disabled={disabled}
		>
			{value ? value : icon}
		</button>
	);
};

export default BaseButton;

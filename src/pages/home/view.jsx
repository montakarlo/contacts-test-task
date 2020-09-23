import React from 'react';
import './style.scss';
import ReactLogo from 'assets/images/react-logo.svg';

const View = () => {
	return (
		<div className={'page page--home'}>
			<img className={'react-logo'} src={ReactLogo} alt="React Logo"/>
      <span className={'page__item'}>
        Go to the contacts page<br />
        to check the task
      </span>
		</div>
	);
};

export { View };

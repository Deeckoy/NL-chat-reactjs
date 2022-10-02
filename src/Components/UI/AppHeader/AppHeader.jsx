import React from 'react';
import classes from './AppHeader.module.scss';

const AppHeader = (props) => {
	return (
			<header className={classes.header}>
				<a className={classes.header__link} href="/">Edit</a>

				<h2 className={classes.header__title}>
					Chats
				</h2>

				<a className={classes.header__link} href="/">New</a>
			</header>
	);
};

export default AppHeader;
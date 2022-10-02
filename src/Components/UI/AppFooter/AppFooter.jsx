import React from 'react';
import classes from './AppFooter.module.scss';
import PhoneIcon from '../Icons/PhoneIcon';
import ChatIcon from '../Icons/ChatIcon';
import SettingsIcon from '../Icons/SettingsIcon';

const AppFooter = () => {
	return (
			<footer className={classes.footer}>
				{/* link */}
				<a className={classes.footer__link} href="/">
					{/* icon */}
					<PhoneIcon/>

					{/* link name */}
					<p className={classes.footer__text}>Calls</p>
				</a>

				{/* link */}
				<a className={classes.footer__link + ' ' + classes.active} href="/">
					{/* icon */}
					<ChatIcon/>

					{/* link name */}
					<p className={classes.footer__text}>Chats</p>
				</a>

				{/* link */}
				<a className={classes.footer__link} href="/">
					{/* icon */}
					<SettingsIcon/>

					{/* link name */}
					<p className={classes.footer__text}>Settings</p>
				</a>
			</footer>
	);
};

export default AppFooter;
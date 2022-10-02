import React from 'react';
import classes from './ProfileHeader.module.scss';

const ProfileHeader = () => {
	return (
			<header className={classes.header}>
				<a className={classes.header__link} href="/">Back</a>
			</header>
	);
};

export default ProfileHeader;
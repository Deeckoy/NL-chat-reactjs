import React, {useEffect, useState} from 'react';
import classes from '../Styles/Profile.module.scss';
import ProfileHeader from '../Components/UI/ProfileHeader/ProfileHeader';
import AppFooter from '../Components/UI/AppFooter/AppFooter';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
	const [user, setUser] = useState({});
	const profileId = useParams();

	const fetchUser = async () => {
		await axios.get('http://localhost:3000/api/users.json').then((response) => setUser(response.data.find(data => data.id === parseInt(profileId.profileId))));
	};

	function formatOnlineTime(time) {
		let date = new Date(time);
		let minutes = '0' + date.getMinutes();
		return date.getHours() + ':' + minutes.substr(-2);
	}

	useEffect(() => {
		fetchUser();
	}, []);

	return (
			<div>
				<ProfileHeader/>

				<div className={'content'}>
					<div className={classes.profile}>
						<img className={classes.profile__avatar} src={user.avatar} alt="profile avatar"/>

						<div className={classes.profile__props}>
							<p className={classes.profile__name}>
								{user.first_name + ' ' + user.last_name}
							</p>
							<p className={classes.profile__time}>
								Was online at {formatOnlineTime(user.last_online)}
							</p>

							<div className={classes.profile_row}>
								<p>
									{user.email}
								</p>

								<p>{user.phone_number}</p>
							</div>
						</div>
					</div>
				</div>

				<AppFooter/>
			</div>
	);
};

export default Profile;
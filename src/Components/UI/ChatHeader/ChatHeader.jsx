import React, {useEffect, useState} from 'react';
import classes from './ChatHeader.module.scss';
import axios from 'axios';

const ChatHeader = (chatId) => {
	const [user, setUser] = useState({});

	const fetchUser = async () => {
		await axios.get('/api/chats.json').then((response) => setUser(response.data.find(data => data.id === parseInt(chatId.chatId)).members[0]));
	};

	useEffect(() => {
		fetchUser();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
			<header className={classes.header}>
				<a className={classes.header__link} href="/">Back</a>

				<h2 className={classes.header__title}>
					{user.first_name + ' ' + user.last_name}
				</h2>

				<a className={classes.header__link} href={'/profile/' + user.id}>
					<img className={classes.header__avatar} src={user.avatar} alt="User avatar"/>
				</a>
			</header>
	);
};

export default ChatHeader;
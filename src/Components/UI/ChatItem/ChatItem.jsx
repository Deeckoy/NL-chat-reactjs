import React from 'react';
import classes from './ChatItem.module.scss';

const ChatItem = ({chat}) => {
	function getFullName(firstName, lastName) {
		return firstName + ' ' + lastName;
	}

	return (
			<a className={classes.chat} href={'/chat/' + chat.id}>
				{/* left part */}
				<div className={classes.chat_left}>
					{/* avatar */}
					<img className={classes.chat__avatar} src={chat.members[0].avatar} alt="avatar"/>

					{/* infos	*/}
					<div className={classes.chat__infos}>
						{/* name */}
						<p className={classes.chat__name}>
							{getFullName(chat.members[0].first_name, chat.members[0].last_name)}
						</p>

						{/* last message	*/}
						<p className={classes.chat__message_last}>
							{chat.last_message}
						</p>
					</div>
				</div>

				{/* right part */}
				<div className={classes.chat_right}>
					{/* last message time */}
					<p className={classes.chat__time_last}>Sa</p>
				</div>
			</a>
	);
};

export default ChatItem;
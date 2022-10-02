import React from 'react';
import classes from './MessageItem.module.scss';

const MessageItem = ({user, message}) => {
	function formatMessageTime(time) {
		let date = new Date(time);
		let minutes = '0' + date.getMinutes();
		return date.getHours() + ':' + minutes.substr(-2);
	}

	return (
			// own or not
			<div className={(message.author.id === 0 ? classes.message_own : '') + ' ' + classes.message}>
				{/* avatar */}
				<div className={classes.message__avatar}>
					<img src={user.avatar} alt="avatar"/>
				</div>

				{/* message body */}
				<div className={classes.message__body}>
					{/* message text */}
					<p className={classes.message__text}>
						{message.message}
					</p>

					{/* message time */}
					<p className={classes.message__time}>
						{formatMessageTime(message.timestamp)}
					</p>
				</div>
			</div>
	);
};

export default MessageItem;
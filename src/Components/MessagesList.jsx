import React from 'react';
import MessageItem from "./UI/MessageItem/MessageItem";

const ChatsList = ({user, messages}) => {
	return (
			<div className={'content'} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
				{messages.map((message, index) =>
						<MessageItem user={user} message={message} key={index}/>
				)}
			</div>
	);
};

export default ChatsList;
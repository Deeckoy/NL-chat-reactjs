import React from 'react';
import ChatItem from "./UI/ChatItem/ChatItem";

const ChatsList = ({chats}) => {
	return (
			<div className={'content'}>
				{chats.map((chat, index) =>
						<ChatItem chat={chat} key={index}/>
				)}
			</div>
	);
};

export default ChatsList;
import React, {useEffect, useState} from 'react';
import ChatHeader from '../Components/UI/ChatHeader/ChatHeader';
import MessagesList from '../Components/MessagesList';
import {useParams} from 'react-router-dom';
import InputFooter from '../Components/UI/InputFooter/InputFooter';
import axios from 'axios';

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [user, setUser] = useState({});

	let {chatId} = useParams();

	async function fetchMessages() {
		await axios.get('/api/messages.json').then(response => {
			setMessages(response.data.find(data => data.id === parseInt(chatId)).messages);
			console.log(response.data.find(data => data.id === parseInt(chatId)));
		});
	}

	const fetchUser = async () => {
		await axios.get('/api/chats.json').then((response) => setUser(response.data.find(data => data.id === parseInt(chatId)).members[0]));
	};

	const sendMessage = (event, newMessage) => {
		event.preventDefault();

		setMessages([...messages, newMessage]);
	};

	useEffect(() => {
		fetchMessages();
		fetchUser();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	}, [messages]);

	return (
			<div>
				<ChatHeader chatId={chatId}/>

				<MessagesList user={user} messages={messages}/>

				<InputFooter sendMessage={sendMessage}/>
			</div>
	);
};

export default Chat;
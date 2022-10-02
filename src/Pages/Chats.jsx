import React, {useEffect, useState} from 'react';
import ChatsList from "../Components/ChatsList";
import AppHeader from "../Components/UI/AppHeader/AppHeader";
import AppFooter from "../Components/UI/AppFooter/AppFooter";
import axios from "axios";

const Chats = () => {
	const [chats, setChats] = useState([]);

	async function fetchChats() {
		await axios.get('http://localhost:3000/api/chats.json').then((response) => setChats(response.data));
	}

	useEffect(() => {
		fetchChats();
	}, [])

	return (
			<div>
				<AppHeader />

				<ChatsList chats={chats}/>

				<AppFooter />
			</div>
	);
};

export default Chats;
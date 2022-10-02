import React, {useState} from 'react';
import classes from './InputFooter.module.scss';
import PaperPlaneIcon from '../Icons/PaperPlaneIcon.png'

const InputFooter = ({sendMessage}) => {
	const [messageInput, setMessageInput] = useState('');

	const prepareMessage = (message) => {
		message = message.trim();

		if (message !== '') {
			return message;
		}
	};

	const sendButtonPressed = (e) => {
		sendMessage(e, {id: Date.now(), message: prepareMessage(messageInput), timestamp: Date.now(), author: {id: 0}});
		setMessageInput('');
	};

	return (
			<footer className={classes.footer}>
				<form className={classes.footer__form}>
					<input value={messageInput} onChange={e => setMessageInput(e.target.value)} className={classes.footer__input}
					       placeholder={'Message...'} type="text"/>

					<button disabled={!prepareMessage(messageInput)} type="submit" onClick={e => sendButtonPressed(e)}
					        className={classes.footer__send}>
						<img width="24" height="24" src={PaperPlaneIcon} alt="Send button icon" />
					</button>
				</form>
			</footer>
	);
};

export default InputFooter;
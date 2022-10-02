import React, {useContext} from 'react';
import {AuthContext} from '../Context';
import classes from '../Styles/Login.module.scss';
import {useNavigate} from 'react-router-dom';

const Login = () => {
	const {setIsAuth} = useContext(AuthContext);
	let navigate = useNavigate();

	const login = event => {
		event.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
		return navigate('/');
	};

	return (
			<div>
				<h1 className={classes.login__title}>LOGIN PAGE</h1>

				<form className={classes.login__form} onSubmit={login}>
					<input className={classes.form__input} placeholder={'Username'} name="username" type="text"/>
					<input className={classes.form__input} defaultValue={'somepassvalue'} placeholder={'Password'}
					       type="password"/>
					<button className={classes.form__submit}>Login</button>
				</form>
			</div>
	);
};

export default Login;
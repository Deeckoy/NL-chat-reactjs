import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../routes';
import {AuthContext} from '../Context';

const AppRouter = () => {
	const {isAuth} = useContext(AuthContext);
	console.log();

	return (
			<Routes>
				{privateRoutes.map(route => <Route key={route.path} exact={route.exact} path={route.path}
				                                   element={isAuth || Boolean(localStorage.getItem('auth')) ? route.element :
						                                   <Navigate to={'/login'}/>}/>)}

				{publicRoutes.map(route => <Route key={route.path} exact={route.exact} path={route.path}
				                                  element={route.element}/>)}
			</Routes>
	);
};

export default AppRouter;
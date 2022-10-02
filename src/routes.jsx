import Chats from './Pages/Chats';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

export const privateRoutes = [
	{path: '/', element: <Chats/>, exact: true},
	{path: '/chat/:chatId', element: <Chat/>, exact: true},
	{path: '/profile/:profileId', element: <Profile/>, exact: true},
];

export const publicRoutes = [
	{path: '/login', element: <Login/>, exact: true},
];
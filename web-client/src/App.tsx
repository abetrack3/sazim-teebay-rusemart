import { RouteObject, useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home';
import Error404Page from './pages/404';
import LoginPage from './pages/auth/login';
import SignupPage from './pages/auth/signup';

function App() {

	const routes: RouteObject[] = [
		{
			path: "/",
			//   element: <Layout />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: 'login', element: <LoginPage /> },
				{ path: 'signup', element: <SignupPage /> },
				{ path: "*", element: <Error404Page /> },
			],
		}
	];

	const routeElement = useRoutes(routes);

	return (
		<>
			<div className='App'>
				<div id='page-body' className='h-screen w-screen'>
					{routeElement}
				</div>
			</div>
			<h1>hola!</h1>
		</>
	)
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './graphql/client.ts'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import Error404Page from './pages/404.tsx'
import LoginPage from './pages/user/login.tsx'
import SignupPage from './pages/user/signup.tsx'
import HomePage from './pages/home/index.tsx'

const routes: RouteObject[] = [
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'login', element: <LoginPage /> },
			{ path: 'signup', element: <SignupPage /> },
			{ path: "*", element: <Error404Page /> },
		],
	}
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</React.StrictMode>,
)

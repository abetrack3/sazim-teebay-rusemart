import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './graphql/client.ts'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'
import 'rsuite/dist/rsuite.min.css';  // or 'rsuite/styles/index.less';
import { CustomProvider } from 'rsuite'


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<CustomProvider theme='light'>
				<RouterProvider router={router} />
			</CustomProvider>
		</ApolloProvider>
	</React.StrictMode>,
)

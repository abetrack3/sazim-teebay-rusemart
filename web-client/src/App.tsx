import { Outlet } from 'react-router-dom'
import './App.css'
import { TopNavBar } from './components/layout/app-bar.layout'

function App() {

	return (
		<>
			<div className='App'>
				<div id='page-body' className='h-screen w-screen'>
					<TopNavBar />
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default App

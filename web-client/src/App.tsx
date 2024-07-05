import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

	return (
		<>
			<div className='App'>
				<div id='page-body' className='h-screen w-screen'>
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default App

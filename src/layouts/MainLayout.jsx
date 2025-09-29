import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

const MainLayout = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</div>
	)
}

export default MainLayout

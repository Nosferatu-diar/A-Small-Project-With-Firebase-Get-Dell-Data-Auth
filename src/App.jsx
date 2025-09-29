// rrd
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
// layout
import MainLayout from './layouts/MainLayout'
// comp
import ProtectedRoutes from './components/protectedRoutes'
// pages
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Home from './pages/home'
//custom hook
import { useGlobalContext } from './hooks/useGlobalContext'

const App = () => {
	const { user, authReady } = useGlobalContext()
	const routes = createBrowserRouter([
		{
			path: '/',
			element: (
				<ProtectedRoutes user={user}>
					<MainLayout />
				</ProtectedRoutes>
			),
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
		{
			path: '/login',
			element: user ? <Navigate to='/' /> : <Login />,
		},
		{
			path: '/signup',
			element: user ? <Navigate to='/' /> : <SignUp />,
		},
	])
	return <>{authReady && <RouterProvider router={routes} />}</>
}

export default App

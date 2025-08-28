import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import { Signout } from '../../hooks/useSignOut'
import styles from './navbar.module.css'
const Navbar = () => {
	const { user } = useGlobalContext()
	const { signOutUser } = Signout()

	return (
		<header className={styles.header}>
			<div className='container'>
				<NavLink to={'/'} className={styles.logo}>
					myMoney
				</NavLink>

				{user && (
					<div className={styles.avatar}>
						<span>{user.email}</span>
						<img src='https://picsum.photos/400' alt='avatar' />
						<button onClick={signOutUser}>Logout</button>
					</div>
				)}

				{!user && (
					<nav>
						<NavLink to={'/login'}>Login</NavLink>
						<NavLink to={'/signup'}>SignUp</NavLink>
					</nav>
				)}
			</div>
		</header>
	)
}

export default Navbar

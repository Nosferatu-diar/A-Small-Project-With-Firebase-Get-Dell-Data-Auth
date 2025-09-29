import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'
import styles from './auth.module.css'
const Login = () => {
	const { login } = useLogin()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		login(email, password)
		setEmail('')
		setPassword('')
	}

	const loading = false
	return (
		<div className={styles.formWrapper}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h1 className={styles.title}>Login</h1>
				<label>
					<span>Email:</span>
					<input
						value={email}
						type='email'
						onChange={e => setEmail(e.target.value)}
					/>
				</label>
				<label>
					<span>Password:</span>
					<input
						value={password}
						type='password'
						onChange={e => setPassword(e.target.value)}
					/>
				</label>
				<Link to={'/signup'}>Create a new Account</Link>
				{!loading && <button>Login</button>}
				{loading && (
					<button className={styles.disabled} disabled>
						Loading...
					</button>
				)}
			</form>
		</div>
	)
}

export default Login

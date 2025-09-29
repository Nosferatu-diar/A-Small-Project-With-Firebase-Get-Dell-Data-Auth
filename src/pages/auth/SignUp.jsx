import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignUp } from '../../hooks/useSignUp'
import styles from './auth.module.css'
const SignUp = () => {
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signup } = useSignUp()
	const handleSubmit = e => {
		e.preventDefault()

		signup(displayName, email, password)

		setDisplayName('')
		setEmail('')
		setPassword('')
	}

	const loading = false
	return (
		<div className={styles.formWrapper}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h1 className={styles.title}>Signup</h1>
				<label>
					<span>Display Name:</span>
					<input
						onChange={e => setDisplayName(e.target.value)}
						type='text'
						value={displayName}
					/>
				</label>
				<label>
					<span>Email:</span>
					<input
						type='email'
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>Password:</span>
					<input
						type='password'
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>
				</label>

				<Link to={'/login'}>If you have account?</Link>
				{!loading && <button>Signup</button>}
				{loading && (
					<button className={styles.disabled} disabled>
						Loading...
					</button>
				)}
			</form>
		</div>
	)
}

export default SignUp

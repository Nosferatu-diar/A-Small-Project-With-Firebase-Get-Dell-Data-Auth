import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'sonner'
import { auth } from '../firebase/firebaseConfig'
import { useGlobalContext } from './useGlobalContext'

export const useSignUp = () => {
	const { dispatch } = useGlobalContext()
	const signup = (displayname, email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user = userCredential.user
				dispatch({ type: 'LOGIN', payload: user })
				toast.success('Welcome')
			})
			.catch(error => {
				const errorCode = error.code
				console.log(errorCode)
				const errorMessage = error.message
				toast.error(errorMessage)
			})
	}
	return { signup }
}

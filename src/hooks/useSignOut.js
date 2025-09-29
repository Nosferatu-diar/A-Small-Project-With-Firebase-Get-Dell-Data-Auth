import { signOut } from 'firebase/auth'
import { toast } from 'sonner'
import { auth } from '../firebase/firebaseConfig'

export const Signout = () => {
	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				toast.success('Fukumean bro !')
			})
			.catch(error => {
				toast.error(error.message)
			})
	}
	return { signOutUser }
}

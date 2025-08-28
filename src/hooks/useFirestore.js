// firebase
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'
import { toast } from 'sonner'
import { db } from '../firebase/firebaseConfig'

export const useFirestore = () => {
	// addDoc
	const addDocument = data => {
		addDoc(collection(db, 'transactions'), data)
			.then(() => toast.success('Successfully added'))
			.catch(err => toast.error(err))
	}
	const deleteDocument = id => {
		deleteDoc(doc(db, 'transactions', id))
			.then(() => toast.success('Successfully deleted'))
			.catch(err => toast.error(err))
	}

	return { addDocument, deleteDocument }
}

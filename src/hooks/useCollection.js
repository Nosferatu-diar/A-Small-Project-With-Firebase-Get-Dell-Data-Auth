import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useRef, useState } from 'react'
import { db } from '../firebase/firebaseConfig'

export const useCollection = (c, _q) => {
	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(true)
	const q = useRef(_q).current
	useEffect(() => {
		let ref = collection(db, c)
		if (q) {
			ref = query(collection(db, c), where(...q))
		}
		const unsubscribe = onSnapshot(ref, querySnapshot => {
			const dataFromCollection = []
			querySnapshot.forEach(doc => {
				dataFromCollection.push({ id: doc.id, ...doc.data() })
			})
			setData(dataFromCollection)
			setIsPending(false)
		})
		return () => unsubscribe()
	}, [c, q])
	return { data, isPending }
}

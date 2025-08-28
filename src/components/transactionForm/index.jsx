import { useState } from 'react'
import { toast } from 'sonner'
import { useFirestore } from '../../hooks/useFirestore'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import styles from './transaction.module.css'

const TransactionsForm = () => {
	const { addDocument } = useFirestore()
	const { user } = useGlobalContext()

	const [title, setTile] = useState('')
	const [price, setPrice] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		if (!title.trim() || !price.trim()) {
			toast.error('Please , fill all fileds')
			return
		}

		addDocument({
			title,
			price: Number(price),
			uid: user.uid,
		})

		setTile('')
		setPrice('')
	}

	return (
		<div className={styles.formWrapper}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label>
					<span>Title</span>
					<input
						type='text'
						onChange={e => setTile(e.target.value)}
						value={title}
					/>
				</label>
				<label>
					<span>Price:</span>
					<input
						type='number'
						onChange={e => setPrice(e.target.value)}
						value={price}
					/>
				</label>
				<button>Add</button>
			</form>
		</div>
	)
}

export default TransactionsForm

// styles
import { FaTrash } from 'react-icons/fa'
import { useFirestore } from '../../hooks/useFirestore'
import styles from './transactionsList.module.css'

const TransactionsList = ({ transactions }) => {
	const { deleteDocument } = useFirestore()

	return (
		<div>
			{transactions.map(transaction => {
				const { id, title, price } = transaction
				return (
					<div key={id} className={styles.card}>
						<h4>{title}</h4>
						<p>{price}</p>
						<span onClick={() => deleteDocument(id)} className={styles.trash}>
							<FaTrash />
						</span>
					</div>
				)
			})}
		</div>
	)
}

export default TransactionsList

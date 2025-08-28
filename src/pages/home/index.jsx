// comp
import TransactionsForm from '../../components/transactionForm'
import TransactionsList from '../../components/transactionsList'
//  custom hooks
import { useCollection } from '../../hooks/useCollection'
import { useGlobalContext } from '../../hooks/useGlobalContext'
// styl
import styles from './home.module.css'

const Home = () => {
	const { user } = useGlobalContext()
	const { data: transactions, isPending } = useCollection('transactions', [
		'uid',
		'==',
		user.uid,
	])

	return (
		<div className={`${styles.home} container`}>
			{isPending ? (
				<h1>Loading...</h1>
			) : (
				transactions && <TransactionsList transactions={transactions} />
			)}
			<div>
				<h2>Add New Transaction:</h2>
				<TransactionsForm />
			</div>
		</div>
	)
}

export default Home

import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import App from './App.jsx'
import { GlobalContextProvider } from './context/globalContext'
import './index.css'

createRoot(document.getElementById('root')).render(
	<>
		<GlobalContextProvider>
			<App />
		</GlobalContextProvider>
		<Toaster position='bottom-center' />
	</>
)

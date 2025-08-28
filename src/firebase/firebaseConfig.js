import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
	apiKey: 'AIzaSyDD8U1tsAdsYXAFWa90D0ZzZ-10Es6ilUQ',
	authDomain: 'mymoney-bf15f.firebaseapp.com',
	projectId: 'mymoney-bf15f',
	storageBucket: 'mymoney-bf15f.firebasestorage.app',
	messagingSenderId: '453962466678',
	appId: '1:453962466678:web:b2d8ee6292af21bd706657',
}

// Initialize
const app = initializeApp(firebaseConfig)
//db
export const db = getFirestore(app)
//autn
export const auth = getAuth()

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const config = {
  apiKey: process.NEXT_PUBLIC_API_KEY,
  authDomain: process.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.NEXT_DATABASE_URL,
  projectId: process.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.NEXT_PUBLIC_APP_ID,
  measurementId: process.NEXT_MEASUREMENT_ID
};

const app = initializeApp(config)
const auth = getAuth(app)

export {auth}
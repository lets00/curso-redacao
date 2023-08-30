import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
} else{
    firebase.app()
}

const database = firebase.database()

export {database, firebase}

export default firebase

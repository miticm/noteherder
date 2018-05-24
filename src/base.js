import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA71FvOaCwWmyY4FSp40I213LqNaAu2jhY",
    authDomain: "noteherder-d4ee9.firebaseapp.com",
    databaseURL: "https://noteherder-d4ee9.firebaseio.com",
    projectId: "noteherder-d4ee9",
    storageBucket: "noteherder-d4ee9.appspot.com",
    messagingSenderId: "492973758504"
}
const app = firebase.initializeApp(config)

export const GoogleAuthProvider =  new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const auth = firebase.auth()

export default Rebase.createClass(app.database())
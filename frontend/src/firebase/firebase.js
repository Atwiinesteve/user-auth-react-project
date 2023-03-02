// Import the functions you need from the SDKs you need
// Importing firebase modules
import { initializeApp } from "firebase/app";

// get user auth services
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD-OkfzE3ikUVSe7vNBzc9xYplkNseNprc",
	authDomain: "react-user-auth-84bce.firebaseapp.com",
	projectId: "react-user-auth-84bce",
	storageBucket: "react-user-auth-84bce.appspot.com",
	messagingSenderId: "1006084155999",
	appId: "1:1006084155999:web:fdaf81672b2b4fb57709ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// user auth
export const auth = getAuth(app);

// google provider
const provider = new GoogleAuthProvider();

// signin in with google
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => console.log(result))
        .catch((error) => console.log(error.message))
};

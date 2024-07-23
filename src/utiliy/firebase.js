
import firebase from "firebase/compat/app";
import{getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJA0HoXnqzUx8MxMu9F-mdz0qtouYWMpA",
  authDomain: "project-672e1.firebaseapp.com",
  projectId: "project-672e1",
  storageBucket: "project-672e1.appspot.com",
  messagingSenderId: "537282426912",
  appId: "1:537282426912:web:d8cf13497b4d6d6e832445",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()

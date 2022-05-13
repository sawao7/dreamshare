import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAYcSE0TmXiDuA-89UqHiWFTvpAtM3j1iw",
	authDomain: "dream-share-fb8a2.firebaseapp.com",
	projectId: "dream-share-fb8a2",
	storageBucket: "dream-share-fb8a2.appspot.com",
	messagingSenderId: "151253933576",
	appId: "1:151253933576:web:47e018c38ff31dff26fbbd",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

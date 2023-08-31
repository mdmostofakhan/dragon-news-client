// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHA0oYdHawQd4kQyr0TgKFhyQP-jzN5LA",
  authDomain: "dragon-news-32c60.firebaseapp.com",
  projectId: "dragon-news-32c60",
  storageBucket: "dragon-news-32c60.appspot.com",
  messagingSenderId: "560633584657",
  appId: "1:560633584657:web:72f20983e3a13b306de5b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
import { initializeApp } from "firebase/app";
//install firebase https://firebase.google.com/

const firebaseConfig = {
    apiKey: "AIzaSyDoQPWhK3ufCAHrE2Sk1Xfb0aOPxt7avy8",
    authDomain: "online-ordering-system-87f89.firebaseapp.com",
    projectId: "online-ordering-system-87f89",
    storageBucket: "online-ordering-system-87f89.appspot.com",
    messagingSenderId: "10036964271",
    appId: "1:10036964271:web:8d7426240ecb4660045d5a"
};

//init firebase
const app = initializeApp(firebaseConfig);

export default app;
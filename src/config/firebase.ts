// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAuyKPwTkrlrwlvMCSd2FctrfOVWTX18kc',
  authDomain: 'animecalendar-931d7.firebaseapp.com',
  projectId: 'animecalendar-931d7',
  storageBucket: 'animecalendar-931d7.appspot.com',
  messagingSenderId: '1044405345876',
  appId: '1:1044405345876:web:6971026182ba52b2eb97c1',
  measurementId: 'G-1GK623JWF0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;

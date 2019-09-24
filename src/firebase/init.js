import firebase from 'firebase';
// import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD4pEbh368_sTu96Nyb0olFGXknSTOxxmE',
  authDomain: 'vue-geo-chat-d5c8e.firebaseapp.com',
  databaseURL: 'https://vue-geo-chat-d5c8e.firebaseio.com',
  projectId: 'vue-geo-chat-d5c8e',
  storageBucket: 'vue-geo-chat-d5c8e.appspot.com',
  messagingSenderId: '717131602603',
  appId: '1:717131602603:web:b2d75d485873a857d8f5ee'
};

// Initialize Firebase
const firebaseInit = firebase.initializeApp(firebaseConfig);

export default firebaseInit.firestore();

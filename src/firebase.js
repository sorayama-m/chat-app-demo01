import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDtMqINSpSLHCiKeQxPOZReRAaS_N4ytuI",
  authDomain: "chat-app-demo01.firebaseapp.com",
  projectId: "chat-app-demo01",
  storageBucket: "chat-app-demo01.appspot.com",
  messagingSenderId: "1078102412479",
  appId: "1:1078102412479:web:44714b6f6f12f929730a0a"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};

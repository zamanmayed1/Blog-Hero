import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbalSpX_IQYfjLNg2dTfrWt_fl7dASh_Y",
  authDomain: "blog-hero.firebaseapp.com",
  projectId: "blog-hero",
  storageBucket: "blog-hero.appspot.com",
  messagingSenderId: "1025587252521",
  appId: "1:1025587252521:web:c24b58f9379c8eb694fb38"
};
const app = initializeApp(firebaseConfig);

export default app


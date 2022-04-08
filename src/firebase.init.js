// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVv4lCp3VQ1-pNtcCNMv9ZGJ_riIOh5Zk",
  authDomain: "fir-all-auth.firebaseapp.com",
  projectId: "fir-all-auth",
  storageBucket: "fir-all-auth.appspot.com",
  messagingSenderId: "792297578526",
  appId: "1:792297578526:web:9d3fcfb13b4d91ccfece0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
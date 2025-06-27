// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCn6He_Mrf4XJs2M2w9nC-r0Dkq1Py1OaU",
  authDomain: "personal-website-caa84.firebaseapp.com",
  projectId: "personal-website-caa84",
  storageBucket: "personal-website-caa84.appspot.com",
  messagingSenderId: "664234862994",
  appId: "1:664234862994:web:2eb3f42f004447abc4794b",
  measurementId: "G-85GN81JR9D",
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyAgiXRvtcEEXCQ42DzNFn_7cBRHMmq-sz0",
    authDomain: "e-commerce-pfa-20056.firebaseapp.com",
    projectId: "e-commerce-pfa-20056",
    storageBucket: "e-commerce-pfa-20056.appspot.com",
    messagingSenderId: "1011874474983",
    appId: "1:1011874474983:web:1a0224f4401eda8698ab42"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;
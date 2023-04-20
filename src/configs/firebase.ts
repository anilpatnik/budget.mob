import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBU3YJyHhD6BQOaoISFHs_10LmejAbWC4E",
  authDomain: "grabmetest.firebaseapp.com",
  projectId: "grabmetest",
  storageBucket: "grabmetest.appspot.com",
  messagingSenderId: "1007493897885",
  appId: "1:1007493897885:web:23162dce4ac2fcfccf3e74",
  measurementId: "G-ZX9SH24HN5"
};
const defaultApp = initializeApp(firebaseConfig);
const fbAuth = getAuth(defaultApp);
const fbBlob = getStorage(defaultApp);
export { fbAuth, fbBlob };

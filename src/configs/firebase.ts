import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { FIREBASE_PROJECT_ID } from "./constants";

const defaultAppConfig = {
  apiKey: "AIzaSyBU3YJyHhD6BQOaoISFHs_10LmejAbWC4E",
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: "1007493897885",
  appId: "1:1007493897885:web:23162dce4ac2fcfccf3e74"
};
const defaultApp = initializeApp(defaultAppConfig);
const fAuth = getAuth(defaultApp);
const fBlob = getStorage(defaultApp);
export { fAuth, fBlob };

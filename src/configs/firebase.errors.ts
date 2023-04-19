import { FirebaseError } from "firebase/app";

export const ErrorCodes: { [key: string]: string } = {
  "auth/user-not-found": "User not found",
  "auth/invalid-email": "Invalid email address",
  "auth/wrong-password": "Incorrect email or password",
  "auth/uid-already-exists": "User id is already in use by an existing user",
  "auth/email-already-exists": "Email is already in use by an existing user",
  "auth/invalid-action-code": "The provided link is expired",
  "auth/requires-recent-login": "Session Expired. Please Logoff and Login"
};

export const ErrorMessage = (error: FirebaseError) => {
  const errorCode = Object.keys(ErrorCodes).find(code => error.code === code);
  return ErrorCodes[errorCode || ""];
};

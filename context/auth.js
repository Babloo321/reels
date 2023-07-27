import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
export const AuthContex = React.createContext();

function AuthWrapper({children}) {
  console.log("hello\n You are in authWrapper");
  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  const store ={
    login
  }
  return (
    <AuthContex.Provider value={store}>
    {children}
    </AuthContex.Provider>
  )
}
export default AuthWrapper
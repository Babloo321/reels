import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase';
export const AuthContex = React.createContext();

function AuthWrapper({children}) {
  const [user, setUser] = useState('');
const [loading, setLoading] = useState(true);
  console.log("hello\n You are in authWrapper");
  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }
// useEffect() is used for when life cycle method used in functional component
  useEffect(()=>{
    onAuthStateChanged(auth,(user) => {
    if(user){
      setUser(user);
    }else{
      setUser('');
    }
    setLoading(false);
  });
  },[]) // this square bracket is use when we want to work as component did mount only once

function logOut(){
  return signOut(auth);
}
  const store ={
    login,
    user,
    logOut
  }

  return (
    <AuthContex.Provider value={store}>
    {!loading && children}
    </AuthContex.Provider>
  )
}
export default AuthWrapper
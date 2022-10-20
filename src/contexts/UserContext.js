import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut,  } from "firebase/auth";
import app from '../firbase/firebase.config';


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

const UserContext = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  

  //sign in with google account
  const googleSignIn =() =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
 //create user account with email and password  or sign up
  const createUser =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in with existing email and password
  const signIn =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //logout user 
  const logOut = () =>{
    return signOut(auth)

  }

  //update user name / profile 
  const updateUserName = (name) =>{
    return updateProfile(auth.currentUser, {displayName:name})
  }

  // user observer for state change 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, 
  [])
  


  
  const  authInfo = {user, googleSignIn, createUser, signIn, logOut, updateUserName, loading}

    return (
        <AuthContext.Provider value={authInfo}>

                {children}

        </AuthContext.Provider>
    );
};

export default UserContext;
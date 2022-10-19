import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,  } from "firebase/auth";
import app from '../firbase/firebase.config';


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

const UserContext = ({children}) => {
  const [user, setUser] = useState(null)
  

  //sign in with google account
  const googleSignIn =() =>{
    return signInWithPopup(auth, googleProvider)
  }
 //create user account with email and password  or sign up
  const createUser =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in with existing email and password
  const signIn =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  // user observer for state change 

  


  
  const  authInfo = {user, googleSignIn, createUser, signIn}

    return (
        <AuthContext.Provider value={authInfo}>

                {children}

        </AuthContext.Provider>
    );
};

export default UserContext;
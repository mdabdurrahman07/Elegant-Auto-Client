import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    
    
    const [user , Setuser] = useState(null)
    const [loader , setloader] = useState(true)


    useEffect(()=>{
       const Observer =  onAuthStateChanged(auth , currentUser =>{
            Setuser(currentUser)
            setloader(false)
        });
        return () =>{
            Observer
        }
    },[])
    // Google login
    const GoogleProvider = new GoogleAuthProvider();

    const googlelogin = () =>{
        return signInWithPopup(auth , GoogleProvider)
    }
    // registration / sign up

    const createUser = (email , password) =>{
            setloader(true)
        return createUserWithEmailAndPassword(auth , email , password)

    }

    // sign in 

    const Login = (email , password ) => {
        setloader(true)
        return signInWithEmailAndPassword(auth , email , password )
    }

    // logout 

    const Logout = () =>{
        setloader(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        Login,
        Logout,
        googlelogin,
        loader
    } 
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
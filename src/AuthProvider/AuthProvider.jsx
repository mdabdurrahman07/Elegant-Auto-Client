import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase';

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    
    
    const [user , Setuser] = useState(null)


    useEffect(()=>{
       const Observer =  onAuthStateChanged(auth , currentUser =>{
            Setuser(currentUser)
        });
        return () =>{
            Observer
        }
    },[])

    // registration / sign up

    const createUser = (email , password) =>{

        return createUserWithEmailAndPassword(auth , email , password)

    }

    // sign in 

    const Login = (email , password ) => {
        return signInWithEmailAndPassword(auth , email , password )
    }

    // logout 

    const Logout = () =>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        createUser,
        Login,
        Logout,
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
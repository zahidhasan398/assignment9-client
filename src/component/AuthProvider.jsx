import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const UserContext=createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const githubAuth=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const googleSignin=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider); 
    }
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            console.log(user);
        })
        return ()=>{
            unSubscribe();
        }
    })
    const info={createUser,logIn,user,setUser,logOut,googleSignin,loading,githubAuth};

    return (
        <UserContext.Provider value={info}>
           {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }

    const login =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = ()=>{
        localStorage.removeItem('smart-car-token');
        return signOut(auth);

    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            return unSubscribe();
        }
    },[])

    const authInfo = {

        user,
        loading,
        createUser,
        login,
        googleSignIn,
        logOut,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
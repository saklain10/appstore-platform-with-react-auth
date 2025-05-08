<<<<<<< HEAD
import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)
    console.log(user, loading)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser =(updatedData) =>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        googleSignIn,
        loading,
        setLoading,
        updateUser
    };

    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;
=======
import React from 'react';

const AuthProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;
>>>>>>> e3992473a096b06251c16c8d53b2ce9e4300e7a4

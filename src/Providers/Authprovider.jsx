import { createContext, useEffect, useState,  } from "react";
import app from "../firebase/firebase.config";
import  {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"

export const AuthContext = createContext()
const auth = getAuth(app)
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);


    // Log out funtion

    const logOut = () =>{
        return signOut(auth)
    }

    // Sign in funtion

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User Observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            
        })
        return ()=>{
            return unsubscribe;
        }
    },[])

// Sign up Funtion
    const register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        register,
        auth,
        user,
        logOut,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
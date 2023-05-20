import { createContext, useEffect, useState,  } from "react";
import app from "../firebase/firebase.config";
import  {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);


    // Log out funtion

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // Sign in funtion

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User Observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setLoading(false)
            
        })
        return ()=>{
            return unsubscribe;
        }
    },[])

// Sign up Funtion
    const register = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

//  Google Sign in function

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        register,
        auth,
        user,
        loading,
        logOut,
        signIn,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app)
export const AuthContact = createContext(null) 

const AuthProvider = ({children}) => {
    
   const [user,setUser] = useState(null);
   const [loader,setLoader] = useState(true)

    const createUser =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const singIn = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoader(true)
      return  signOut(auth)
    
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
            // console.log('logged in user',loggedUser);
            setUser(loggedUser)
            setLoader(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const authInfo = {
        user,
        loader,
        createUser,
        singIn,
        logOut,
        
    }

    return (
       <AuthContact.Provider value={authInfo}>
        {children}
       </AuthContact.Provider>
    );
};

export default AuthProvider;
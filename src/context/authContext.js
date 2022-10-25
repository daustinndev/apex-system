import { createContext, useContext, useEffect, useState } from 'react'
import { 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut,
    signInWithPopup,
    FacebookAuthProvider
} from "firebase/auth";
import { auth } from "../firebase/config";

const authContext = createContext()


export const useAuth = () => {
    const context = useContext(authContext)
    if (!context === undefined) throw new Error("There is not auth provider")
    return context
}


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signIn = (user) => signInWithEmailAndPassword(auth, user.email, user.password);
    const logout = () => signOut(auth)
    const signInGoogle = () => {
        const googleProvider = new  GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const signInFacebook = () => {
        const facebookProvider = new  FacebookAuthProvider()
        return signInWithPopup(auth, facebookProvider)
    }


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])
    

    return (
        <>
            <authContext.Provider value={{ signIn,user,logout,loading,signInGoogle,signInFacebook }}>
                {children}
            </authContext.Provider>
        </>
    )
}
import { createContext, useContext, useEffect, useState } from 'react'
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup,
    FacebookAuthProvider
} from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc, setDoc } from 'firebase/firestore';

const authContext = createContext()


export const useAuth = () => {
    const context = useContext(authContext)
    if (!context === undefined) throw new Error("There is not auth provider")
    return context
}


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const [userDetail, setUserDetail] = useState({})
    const [userDetailLoading, setuserDetailLoading] = useState(true)

    const userCrearteDatabase = async (userDetail) => {
        await setDoc(doc(db, "users", userDetail.userId), userDetail);
        getUserDetail()
    }

    const getUserDetail = async () => {
        try {
            const snap = await getDoc(doc(db, 'users', user.uid))
            if (snap.exists()) {
                setUserDetail(snap.data())
                setuserDetailLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const signIn = (user) => signInWithEmailAndPassword(auth, user.email, user.password);
    const signUp = (user) => {
        return createUserWithEmailAndPassword(auth, user.email, user.password)
    }
    const logout = () => signOut(auth)
    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const signInFacebook = () => {
        const facebookProvider = new FacebookAuthProvider()
        return signInWithPopup(auth, facebookProvider)
    }
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            getUserDetail()
        })
    }, [])


    return (
        <>
            <authContext.Provider value={{
                signUp,
                signIn,
                user,
                userDetail,
                getUserDetail,
                logout,
                loading,
                userDetailLoading,
                signInGoogle,
                signInFacebook,
                userCrearteDatabase
            }}>
                {children}
            </authContext.Provider>
        </>
    )
}
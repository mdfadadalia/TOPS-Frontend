import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/FirebaseRealdb";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const registerUser = async (email, password) => {

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            await sendEmailVerification(userCredential.user)
            alert("Register Sucessfull")
            return true;
        } catch (error) {//chk
            alert(error.message)
            return false;
        }
    }

    const loginUser = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            if (userCredential.user.emailVerified) {
                console.log("Login SucessFull")
                return true
            }
            else {
                console.log("Login Failed")
                return false
            }
        } catch (error) {
            console.log(error.message)
            return (false)
        }

    }

    const googleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            console.log(result.user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    const forgotPassword = async(email) =>{
        try {
            await sendPasswordResetEmail(auth,email)
            alert("Password Reset Link send on Register Email")
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();

    }, [])

    return <>
        <AuthContext.Provider value={{ registerUser, loginUser, googleLogin,user,logout,loading,forgotPassword }}>
            {children}
        </AuthContext.Provider>
    </>
}
export default AuthContextProvider

export const useAuth = () => {
    return useContext(AuthContext)
}
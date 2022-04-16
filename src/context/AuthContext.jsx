import { createContext, useContext, useEffect } from "react";
import app from "../firebase/firebase.config";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
const auth = getAuth(app);
const authContext = createContext();
//esta es la funcion que va hacer de hook y colocarlos en todas los componentes
export const useAuth = () => {
    const context = useContext(authContext);
    return context;
};


export function AuthProvider({ children }) {
    const [userId, setUserId] = useState("")
    const [user, setUser] = useState({});
    //esto es los errores del patita, ya vere como lo puedo corregir

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
        });
    }, []);

    const signin = (email, password) => {
        createUserWithEmailAndPassword(
            auth, 
            email, 
            password);
    };
    const login = (email, password) => {
            signInWithEmailAndPassword(
              auth, 
              email,  
              password
              )
        };
    const logout = () => signOut(auth);

    const loginWithGoogle = () => {
        try {
            const googleProvider = new GoogleAuthProvider()
            return signInWithPopup(auth, googleProvider)
        }catch (error) {
            
        }

    }
    // const logout = () => auth.signOut()
    //sirve para idnentificar al usuario que sea logeado o registrado en su defecto
    return (
        <authContext.Provider value={{ signin, login, user, logout, loginWithGoogle}}>
            {children}
        </authContext.Provider>
    );
}
export default AuthProvider;

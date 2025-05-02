import { AuthContext } from "./AuthContext";
import {auth} from "../../firebase.init"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const provider = new GoogleAuthProvider();

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    function createUser(email, password) {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function loginUser(email, password) {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        setLoading(true);
        return signOut(auth)
    }

    function loginWithGoogle() {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return(() => {
            unSubscribe()
        })
    }, [])
    
    
    const userInfo = {
        createUser, loginUser, user, logOut, loading, loginWithGoogle
    }
    
    return(
        <AuthContext value = {userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
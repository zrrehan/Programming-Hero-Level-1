import { AuthContext } from "./AuthContext";
import {auth} from "../../firebase.init"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    function createUser(email, password) {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function loginUser(email, password) {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        setLoading(false);
        return signOut(auth)
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
        createUser, loginUser, user, logOut, loading
    }
    
    return(
        <AuthContext value = {userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
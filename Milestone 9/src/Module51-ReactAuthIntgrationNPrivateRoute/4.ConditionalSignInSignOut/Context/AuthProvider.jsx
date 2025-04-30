import { AuthContext } from "./AuthContext";
import {auth} from "../../firebase.init"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function loginUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        console.log("Hello")
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return(() => {
            unSubscribe()
        })
    }, [])
    
    
    const userInfo = {
        createUser, loginUser, user, logOut
    }
    
    return(
        <AuthContext value = {userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
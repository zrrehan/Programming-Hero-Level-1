import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    function loginFirebase(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function registerFirebase(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logoutFirebase() {
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log("onAuthStateChanged triggered");
            setUser(user.email);
        });

        return(() => {
            unSubscribe();
        })
    }, [])

    const authVariable = {
        loginFirebase, registerFirebase, loginFirebase, user, logoutFirebase
    }



    return(
        <AuthContext value = {authVariable}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
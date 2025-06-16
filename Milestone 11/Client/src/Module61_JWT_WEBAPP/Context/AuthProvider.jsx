import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import { useEffect, useState } from "react";

function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function loginUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
                console.log(user);
                if(user) {
                    setUser(user)
                }
            });

        return(() => {
            unSubscribe()
        });
    })

    const value = {
        loginUser, createUser, user
    }

    return(
        <AuthContext value={value}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
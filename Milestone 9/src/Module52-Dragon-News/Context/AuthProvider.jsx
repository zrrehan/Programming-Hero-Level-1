import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import {auth} from "../firebase.init.js"
import { useEffect, useState } from "react";

function AuthProvider({children}) {
    const [userImage, setUserImage] = useState("");
    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function updateUser(name, image) {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user.photoURL)
            setUserImage(user.photoURL)
        })
        return(() => {
            unSubscribe();
        })
    }, [])

    let authMethods = {
        createUser, updateUser, userImage
    }

    return(
        <AuthContext value = {authMethods}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import {auth} from "../firebase.init.js"
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

function AuthProvider({children}) {
    const [userImage, setUserImage] = useState("");
    function createUser(email, password) {
        setUserImage("");
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUserImage(result.photoURL)
            })
    }

    function updateUser(name, image) {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        }).then(() => {
            setUserImage(image)
        })
    }

    function logOut() {
        setUserImage("");
        return signOut(auth);
    }

    function login(email, password) {
        setUserImage("")
        return signInWithEmailAndPassword(auth, email, password)
    }

    function googleLogin() {
        setUserImage("")
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setUserImage(user?.photoURL)
            console.log("AuthProvider.jsx", user, user?.photoURL)
        })
        return(() => {
            unSubscribe();
        })
    }, [])

    let authMethods = {
        createUser, updateUser, userImage, logOut, login, googleLogin
    }

    return(
        <AuthContext value = {authMethods}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
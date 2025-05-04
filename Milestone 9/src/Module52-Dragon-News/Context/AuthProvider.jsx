import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import {auth} from "../firebase.init.js"
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

function AuthProvider({children}) {
    const [userImage, setUserImage] = useState("");
    const [loading, setLoading] = useState(true);
    function createUser(email, password) {
        setUserImage("");
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
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
        setLoading(true);
        return signOut(auth);
    }

    function login(email, password) {
        setUserImage("");
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    function googleLogin() {
        setUserImage("")
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user.photoURL)
                setUserImage(result.user.photoURL)
            });
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setUserImage(user?.photoURL)
            setLoading(false);
        })
        return(() => {
            unSubscribe();
        })
    }, [])

    let authMethods = {
        createUser, updateUser, userImage, logOut, login, googleLogin, loading
    }

    return(
        <AuthContext value = {authMethods}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
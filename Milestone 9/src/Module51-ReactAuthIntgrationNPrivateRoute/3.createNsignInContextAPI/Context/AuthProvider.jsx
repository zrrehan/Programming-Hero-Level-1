import { AuthContext } from "./AuthContext";
import {auth} from "../../firebase.init"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
function AuthProvider({children}) {

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function loginUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        if(currentUser) {
            console.log("Has Current User")
        } else {
            console.log("No Current User found!")
        }
    })
    
    
    const userInfo = {
        createUser, loginUser
    }
    
    return(
        <AuthContext value = {userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
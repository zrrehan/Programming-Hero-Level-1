import { AuthContext } from "./AuthContext";

function AuthProvider({children}) {
    const userInfo = {
        username: "potatoAshenOne"
    }
    
    return(
        <AuthContext value = {userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
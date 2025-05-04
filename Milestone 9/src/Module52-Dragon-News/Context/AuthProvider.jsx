import { AuthContext } from "./AuthContext";

function AuthProvider({children}) {
    return(
        <AuthContext>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;
import { use } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router"

function PrivateRoute({children}) {
    const {user} = use(AuthContext)
    
    if(!user) {
        return <Navigate to = "/login"></Navigate>
    } else {
        return children
    }
}

export default PrivateRoute;
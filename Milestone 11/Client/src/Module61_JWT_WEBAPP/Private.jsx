import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"
import { Navigate } from "react-router";



function Private({children}) {
    const {user} = useContext(AuthContext);
    if(!user) {
        return <Navigate to = "/auth"></Navigate>
    }

    return(
        <div>
            {children}
        </div>
    )
}

export default Private;
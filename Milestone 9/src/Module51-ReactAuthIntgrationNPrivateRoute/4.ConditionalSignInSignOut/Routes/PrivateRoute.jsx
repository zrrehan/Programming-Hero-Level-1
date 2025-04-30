import { use } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate, useLocation, useNavigate } from "react-router"

function PrivateRoute({children}) {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    console.log(location);


    if(loading) {
        return <div className="text-center"><span class="loading loading-spinner loading-xl"></span></div>
    }
    
    if(!user) {
        return <Navigate to = "/login" state = {location?.pathname}></Navigate>
    } else {
        return children
    }
}

export default PrivateRoute;
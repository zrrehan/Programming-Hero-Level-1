import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

function PrivateRoute({children}) {
    const { userImage, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading) {
        return <div className="mt-7 text-center"><span className="loading loading-ring loading-xl"></span></div>
    }
    if(!userImage) {
        return <Navigate to = "/auth/login" state = {location.pathname ? location.pathname : null}></Navigate>
    }
    return(
        <div>
            {children}
        </div>
    )
}

export default PrivateRoute;
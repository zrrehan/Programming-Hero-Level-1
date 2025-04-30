import { use } from "react"
import { AuthContext } from "../Context/AuthContext";

function Profile() {
    const {user} = use(AuthContext);
    
    return(
        <h1>{user.email}</h1>
    )
}

export default Profile;
import axios from "axios";
import { useState } from "react"

function JWT() {
    const [user, setUser] = useState(null); 


    function onAuthStateChange() {
        if(user) {
            setUser(null)
        } else {
            setUser("rehan@gmail.com")
           
            const userData = { email: "user" }
            axios.post(
                "http://localhost:3000/jwt",
                userData, 
                {withCredentials: true} 
            )
                .then(res => {
                    console.log(res.data);
                }).catch(error => {
                    console.log(error);
                })
        }
    }
    return (
        <div>
            <div>
                <div onClick={onAuthStateChange} className="btn btn-primary">Login</div>
                <div onClick={onAuthStateChange} className="btn btn-secondary">logout</div>
                {
                    user && <h1>{user} logged in</h1>
                }
            </div>
        </div>
    )
}

export default JWT;
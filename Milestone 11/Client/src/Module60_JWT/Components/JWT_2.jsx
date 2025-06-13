import axios from "axios"

function JWT2() {
    function getTheToken() {
        const userData = { name: "rehan" }
        axios.post(
            "http://localhost:3000/",
            userData, 
            {withCredentials: true}
        )
            .then((res) => console.log(res.data))
            .catch((error) => "There is an error");
    }

    function seeTheToken() {
        axios.get("http://localhost:3000/", {
            withCredentials: true // to get cookies in the backend 
        })
            .then((res) => console.log(res.data))
            .catch((error) => "There is an error");
    }

    function verify() {
        const userInfo = { name: "rehan" }
        axios.post("http://localhost:3000/verify", 
            userInfo,
            { withCredentials: true }
        )
            .then(res => console.log(res.data))
            .catch(err => console.log("error"))
    }
    return(
        <div>
            <div onClick={getTheToken} className="btn btn-accent">Get the token</div>
            <div onClick={seeTheToken} className="btn btn-secondary">See the token in Server Side</div>
            <div onClick={verify} className="btn btn-info">Verify</div>
        </div>
    )
}

export default JWT2
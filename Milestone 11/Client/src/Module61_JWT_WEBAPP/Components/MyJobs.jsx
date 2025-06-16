import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function MyJobs() {
    const [data, setData] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:3000/my-applications?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(user.accessToken);
    return(
        <div>
            {
                data.map((singleData) => <p>Company: {singleData.company}</p>)
            }
        </div>
    )
}

export default MyJobs;
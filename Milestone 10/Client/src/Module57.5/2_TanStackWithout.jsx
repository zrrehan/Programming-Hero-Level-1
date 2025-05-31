import { useEffect, useState } from "react";

function TanStackWithout() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setLoading(false);
            })
    }, [])

    if(loading) {
        return <p className="bg-yellow-300">Loading...</p>
    }

    return(
        <div>
            {
                user.map(data => <p>{data.name}</p>)
            }
        </div>
    )
}

export default TanStackWithout;
import { Link, useLoaderData } from "react-router";

function User() {
    const data = useLoaderData();
    console.log(data);
    return(
        <div>
            {
                data.map((user) => {
                    return <div className="border rounded-lg m-3 p-3 ">
                                <h1>Name: {user.name}</h1>
                                <h2>phone: {user.phone}</h2>
                                <Link className="text-green-400 underline" to = {`/users/${user.id}`}>Show Details</Link>
                           </div>
                })
            }
        </div>
    );
}

export default User;
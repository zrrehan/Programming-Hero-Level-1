import { useLoaderData } from "react-router";

function UserDetails() {
    const user = useLoaderData();
    console.log("hello", user);
    
    const { name, username, email, address, phone, website } = user;
    return (
        <div className="border rounded-lg bg-amber-200 p-3 m-3">
            <h1>Name: {name}</h1>
            <h1>username: {username}</h1>
            <h1>email: {email}</h1>
            <h1>Address: {address.city}</h1>
            <h1>Phone: {phone}</h1>
            <h1>Website: {website}</h1>
        </div>
    )
}
export default UserDetails;
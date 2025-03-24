import { use, Suspense } from "react";

function SingleUser({user}) {
    let styles = {
        border: "2px solid black",
        borderRadius: "8px",
        marginBottom: "2px",
        padding: "5px"
    }
    let {name, email} = user;
    return (
        <div style={styles}>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
        </div>
    );
}

function Users({allUserPromise}) {
    let allusers = use(allUserPromise);
    console.log(allusers);
    console.log("hello");

    return (
        <>
            {
                allusers.map((user) => {
                    return (
                        <SingleUser key = {user.id} user = {user}></SingleUser>
                    );
                })
            }
        </>
    );
}

function UserFetch() {
    async function getAllUsers(url) {
        let response = await fetch(url);
        return response.json();
    } 

    let allUserPromise = getAllUsers("https://jsonplaceholder.typicode.com/users");

    return (
        <>
            <Suspense fallback = {<h2>Please Wait...</h2>}>
                <Users allUserPromise = {allUserPromise}></Users>
            </Suspense>
        </>
    );
}

export default UserFetch;
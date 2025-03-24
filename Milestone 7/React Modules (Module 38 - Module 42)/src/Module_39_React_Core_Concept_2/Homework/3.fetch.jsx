import { Suspense, use } from "react";

function SingleFriend({info}) {
    let {name, address} = info;
    let {city} = address;
    let companyName = info["company"]["name"];
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>City: {city}</h3>
            <h3>Company: {companyName}</h3>
            <hr />
        </div>
    );
}

function AllFriends({ friendInfoPromise }) {
    const friendList = use(friendInfoPromise);
    if(JSON.stringify(friendList) === "{}") {
        return <h1>An Error has occured</h1>
    } else {
        return (
            <div>
                <h1>All Friend Info</h1>
                {
                    friendList.map((friend) => <SingleFriend info={friend}></SingleFriend>)
                }
            </div>
        );
    }
}

function Friend() {
    const friendInfoPromiseFunction = async (url) => {
        let response = await fetch(url);
        return response.json();
    }

    let friendInfoPromise = friendInfoPromiseFunction("https://jsonplaceholder.typicode.com/users");
    return(
        <Suspense fallback = {<h1>Loading...</h1>}>
            <AllFriends friendInfoPromise={friendInfoPromise}></AllFriends>
        </Suspense>
    );
}

export default Friend;
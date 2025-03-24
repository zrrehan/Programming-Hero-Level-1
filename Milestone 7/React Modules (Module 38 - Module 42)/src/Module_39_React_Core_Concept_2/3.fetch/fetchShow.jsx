import { use, Suspense } from "react";

function AllUsers({userPromise}) {
    let userInfo = use(userPromise);
    return <h1>All User info loaded</h1>
}

function FetchShow() {
    async function fetchUsers(url) {
        let response = await fetch(url);
        return response.json();
    }
    let userPromise = fetchUsers("https://jsonplaceholder.typicode.com/posts");
    /*
        *that is how it can be written as the promise chaining 
        const VarName = fetch(url).then(res => res.json()) 
    */
    
    return(
        <>
            <Suspense fallback = {<h2>loading....</h2>}>
                <AllUsers userPromise = {userPromise}></AllUsers>
            </Suspense>
        </>
    );
}

export default FetchShow;
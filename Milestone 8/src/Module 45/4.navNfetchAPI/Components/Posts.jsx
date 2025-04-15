import { use } from "react";

function Posts({postPromise}) {
    let data = use(postPromise);
    console.log(data);

    return(
        <h1>This is all post! check console</h1>
    )
}

export default Posts;
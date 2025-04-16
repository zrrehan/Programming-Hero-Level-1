import { useLoaderData } from "react-router";

function FetchBigData() {
    let data = useLoaderData();
    console.log(data);
    return(
        <h1>Big data</h1>
    )
}

export default FetchBigData;
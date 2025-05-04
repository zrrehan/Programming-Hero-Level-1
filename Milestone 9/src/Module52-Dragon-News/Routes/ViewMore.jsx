import { use } from "react";
import { useParams } from "react-router";

function ViewMore({ dataPromise }) {
    let params = useParams();
    const data = use(dataPromise);
    const { id } = params;
    console.log(data);
    return(
        <div>
            View More
        </div>
    )
}

export default ViewMore;
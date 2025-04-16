import { useParams } from "react-router";

function Route1() {
    const params = useParams();
    console.log(params)
    return (
        <div>
            Hello {params.id}
        </div>
    );
}
export default Route1;
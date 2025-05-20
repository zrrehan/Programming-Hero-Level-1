import { useLoaderData } from "react-router";
import Phone from "./Phone";

function Phones() {
    const data = useLoaderData(); 
    return(
        data.map((singlePhone) => <Phone singlePhone={singlePhone}></Phone>)
    )
}

export default Phones;
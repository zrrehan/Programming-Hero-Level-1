import { use } from "react";
import SingleCard from "./SingleCard";

function Cards({ productPromise }) {
    let prodcutData = use(productPromise);
    console.log(prodcutData);
    return(
        <div className="flex flex-wrap justify-between gap-10">
            {
                prodcutData.map((product) => <SingleCard product = {product}></SingleCard>)
            }
        </div>
    );
}

export default Cards;
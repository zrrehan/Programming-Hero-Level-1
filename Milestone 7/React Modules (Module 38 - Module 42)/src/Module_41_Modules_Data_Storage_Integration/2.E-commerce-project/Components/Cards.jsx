import { use } from "react";
import SingleCard from "./SingleCard";
import { filteredItem } from "../utilities";

function Cards({ productPromise, setCart, filter }) {
    let prodcutData = use(productPromise);
    prodcutData = filteredItem(prodcutData, filter);
    return(
        <div className="flex flex-wrap justify-between gap-10">
            {
                prodcutData.map((product) => <SingleCard product={product} setCart={setCart}></SingleCard>)
            }
        </div>
    );
}

export default Cards;
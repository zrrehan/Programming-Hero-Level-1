import { use } from "react";
import { Link, NavLink, useParams } from "react-router";

const dataPromise = fetch("/categories.json")
    .then((res) => res.json());

function LeftSide() {
    const categories = use(dataPromise);
    return(
        <div className="space-y-3 sticky top-2">
            {
                categories.map((category => {
                    return <div key = {category.id}>
                        <NavLink to={`category/${category.id}`} className="btn bg-transparent border-0 w-full hover:bg-gray-200">{category.name}</NavLink>
                    </div>
                }))
            }
        </div>
    )
}

export default LeftSide;
import { useContext } from "react";
import { TitleContext } from "./Edward";

function Connor() {
    const title = useContext(TitleContext);

    return(
        <div className="border p-5">
            <h1>Connor {title}</h1>
        </div>
    )
}

export default Connor;
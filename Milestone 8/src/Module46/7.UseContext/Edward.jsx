import { createContext } from "react";
import Hytham from "./Hytham";

export const TitleContext = createContext("");

function Edward() {
    const title = "Assassin"
    return(
        <div className="border p-5 m-3">
            <h1>Edward</h1>
            <TitleContext.Provider value = {title}>
                <Hytham title = {title}></Hytham>
            </TitleContext.Provider>
        </div>
    )
}

export default Edward;
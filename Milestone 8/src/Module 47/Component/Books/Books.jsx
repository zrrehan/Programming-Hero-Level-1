import { use } from "react";
import Book from "./Book";

function Books({ dataPromise }) {
    let data = use(dataPromise);
    console.log(data);
    return(
        <div>
            <h1 className="header-font text-[40px] text-center font-bold">Books</h1>
            <div className="flex flex-wrap gap-6">
                {
                    data.map((bookInfo) => <Book bookInfo = {bookInfo}></Book>)
                }
            </div>
        </div>
    )
}

export default Books;
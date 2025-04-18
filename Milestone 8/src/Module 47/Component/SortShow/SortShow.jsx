import { use, useState } from "react";
import { dbGet } from "../../utility.js";
import Card from "./Card.jsx";

function SortShow({ sort, dataPromise }) {
    const [category, setCategory] = useState("read")
    let data = use(dataPromise);
    let sorted = [];
    function dataSort(category) {
        let inList = dbGet(category);
        sorted = inList.map((itemId) => data[itemId-1]);

        if(sort == "rating") {
            sorted.sort((a, b) => a.rating - b.rating);
        } else if (sort == "numberOfPages") {
            sorted.sort((a, b) => a.totalPages - b.totalPages);
        } else if (sort == "publishingYear") {
            sorted.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        }
    }

    dataSort(category);
    
    return(
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input onClick={() => setCategory("read")} type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sorted.map((item) => <Card item = {item}></Card>)
                    }
                </div>

                <input onClick={() => setCategory("wishlist")} type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sorted.map((item) => <Card item={item}></Card>)
                    }
                </div>

            </div>
        </div>
    )
}
export default SortShow;
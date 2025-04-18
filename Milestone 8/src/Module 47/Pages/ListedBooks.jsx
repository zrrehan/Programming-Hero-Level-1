import { Suspense, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SortShow from "../Component/SortShow/SortShow";


let dataPromise = fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json")
                    .then((res) => res.json());

function ListedBooks() {
    const [sort, setSort] = useState(false);

    return(
        <div>
            <div className="text-center py-[33px] bg-[rgba(19,19,19,0.05)] font-bold text-[28px] rounded-2xl">
                Books
            </div>
            <div className="text-center py-[33px] font-bold text-[28px] rounded-2xl">
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Sort By 
                        <IoIosArrowDown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSort("rating")}><a>Rating</a></li>
                        <li onClick={() => setSort("numberOfPages")}><a>Number of pages</a></li>
                        <li onClick={() => setSort("publishingYear")}><a>Publishing Year</a></li>
                    </ul>
                </div>
            </div>

            <Suspense fallback = {<p>Loading.....</p>}>
                <SortShow dataPromise={dataPromise} sort={sort}></SortShow>
            </Suspense>
        </div>
    )
}

export default ListedBooks;
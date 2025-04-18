import { VscLocation } from "react-icons/vsc";
import { FaUserFriends } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { Link } from "react-router";

function Card({item}) {
    // console.log(item);
    const { bookId, image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = item;
    return(
        <div className="border rounded-2xl border-[rgba(19,19,19,0.15)] flex gap-7 p-6 mt-6">
            <div className= "h-[230px] w-[230px] bg-[rgba(19,19,19,0.05)] rounded-2xl flex justify-center items-center">
                <div className = "h-[172px]">
                    <img className="h-full" src={image} />
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="header-font text-2xl font-bold">{bookName}</h1>
                    <h2 className="text-[16px] font-semibold">By: {author}</h2>
                </div>
                <div className="flex gap-5">
                    <p>Tag</p>
                    {
                        tags.map((tag) => <div class="badge badge-soft badge-success"># {tag}</div>)
                    }
                    <div className="flex gap-2 items-center">
                        <VscLocation />
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <FaUserFriends />
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuNewspaper />
                        <p>Page: {totalPages}</p>
                    </div>
                </div>
                
                <div class="divider"></div>

                <div className="flex gap-8">
                    <div class="badge badge-soft badge-info px-[40px] py-[21px]  rounded-4xl text-[16px]">Category: {category}</div>
                    <div class="badge badge-soft badge-warning px-[20px] py-[21px] rounded-4xl text-[16px]">Rating: {rating}</div>
                    <Link to={`/description/${bookId}`}>
                        <button class="btn green-btn px-[40px] py-[21px] rounded-4xl text-[16px]">View Details</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default Card;
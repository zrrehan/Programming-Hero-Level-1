import { use } from "react";
import Blog from "./Blog";
// id, cover, title, author, hashtags, author_img
function Blogs({ data, addBookmark, markedAsRead, increaseReadingTime }) {
    return(
        <div>
            <h1 className="text-4xl mb-5 font-bold text-center">Total Blogs: {data.length}</h1>
            <div className = "space-y-7">
                {
                    data.map((blog) => <Blog blogData={blog} increaseReadingTime={increaseReadingTime} addBookmark={addBookmark} markedAsRead={markedAsRead}></Blog>)
                }
            </div>
        </div>
    );
}

export default Blogs;
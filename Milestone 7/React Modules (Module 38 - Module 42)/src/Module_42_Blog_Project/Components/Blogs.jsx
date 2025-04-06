import { use } from "react";
import Blog from "./Blog";
// id, cover, title, author, hashtags, author_img
function Blogs({data}) {
    console.log(data)
    return(
        <div>
            <h1>Total Blogs: {data.length}</h1>
            <div className = "space-y-7">
                {
                    data.map((blog) => <Blog blogData={blog}></Blog>)
                }
            </div>
        </div>
    );
}

export default Blogs;
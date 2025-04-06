import { useState } from "react";
import { FaBookmark } from "react-icons/fa";

function Blog({ blogData, addBookmark, markedAsRead, increaseReadingTime }) {
    const { id, cover, title, author, hashtags, author_img, reading_time } = blogData;
    const [disable, setDisable] = useState(false);

    function buttonHandler() {
        markedAsRead(id);
        setDisable(true);
        increaseReadingTime(reading_time)
    }
    
    return(
        <div>
            <div className="shadow-xl card bg-base-100 w-[650px]">
                <figure>
                    <img className=" w-full"
                        src= {cover}
                        alt="Cover Pics" />
                </figure>
                <div className="card-body">
                    <h2 className="font-semibold text-xl">{title}</h2>
                    <div className = "flex gap-3 items-center py-2">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src= {author_img} />
                            </div>
                        </div>
                        <p className="text-3xl font-semibold">{author}</p>
                    </div>
                    <div className="space-x-7">
                        {
                            hashtags.map(hashtag => <div className="badge badge-soft badge-neutral">{hashtag}</div>)
                        }
                    </div>
                    <div className="card-actions justify-end ">
                        <button className="btn btn-circle" onClick={() => !disable ? addBookmark({id: id, title: title}): null}>
                            <FaBookmark />
                        </button>
                        <button className="btn btn-primary" disabled = {disable}  onClick={buttonHandler}>Mark As Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
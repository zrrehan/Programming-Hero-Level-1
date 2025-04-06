import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";
import Notification from "./Components/Notification";
import { Suspense, useEffect, useState } from "react";

let dataLink = "data.json";


function Module42() {
    const [blogs, setBlogs] = useState([]);
    const [bookmarked, setBookmarked] = useState([]);
    const [totalReadingTime, setTotalReadingTime] = useState(0);

    function increaseReadingTime(time){
        setTotalReadingTime(totalReadingTime + time);
    }

    function addBookmark(bookmarkedData) {
        for(let item of bookmarked){
            if(item.id === bookmarkedData.id) {
                return;
            }
        }
        setBookmarked([...bookmarked, bookmarkedData]);
    }

    function markedAsRead(id) {
        setBookmarked(bookmarked.filter((data) => data.id !== id))
    }

    useEffect(() => {
        fetch(dataLink)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return(
        <div>
            <Navbar></Navbar>
            <br />
            <div className="flex justify-between max-w-[1400px] m-auto">
                <div>
                    <Blogs data={blogs} increaseReadingTime={increaseReadingTime}  addBookmark={addBookmark} markedAsRead={markedAsRead}></Blogs>
                </div>
                <div>
                    <Notification bookmarked={bookmarked} totalReadingTime={totalReadingTime}></Notification>
                </div>
            </div>
        </div>
    );
}

export default Module42
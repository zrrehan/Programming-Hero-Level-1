import Blogs from "./Components/Blogs";
import Navbar from "./Components/Navbar";
import Notification from "./Components/Notification";
import { Suspense, useEffect, useState } from "react";

let dataLink = "data.json";


function Module42() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(dataLink)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    console.log(blogs);
    return(
        <div>
            <Navbar></Navbar>
            <div className="flex justify-between max-w-[90vw] m-auto">
                <div>
                    <Blogs data={blogs}></Blogs>
                </div>
                <div>
                    <Notification></Notification>
                </div>
            </div>
        </div>
    );
}

export default Module42
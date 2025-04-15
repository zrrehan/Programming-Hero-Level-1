import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import User from "./Components/User";
import Posts from "./Components/Posts";
import UserDetails from "./Components/UserDetails";
import { Suspense } from "react";

let postPromise = fetch("https://jsonplaceholder.typicode.com/posts")   
                    .then((res) => res.json());

const router = createBrowserRouter([
    {
        path: "/",
        Component: Header,
        children: [
            {index: true, Component: Home},
            {path: "about", Component: About},
            {
                path: "users",
                loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
                Component: User
            },
            {
                path: "posts",
                element: <Suspense fallback = {<p>Loading...</p>}>
                    <Posts postPromise={postPromise}></Posts>
                </Suspense>
            },
            {
                path: "users/:userId",
                loader: ({params}) => {
                    // console.log(params)  output: {userId: 1}
                    return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
                },
                Component: UserDetails 
            }
        ]
    },
]);

function Nav() {
    return(
        <RouterProvider router={router} />
    );
}

export default Nav;
import { createBrowserRouter, NavLink, RouterProvider } from "react-router";
import { Outlet } from "react-router";
import FetchBigData from "./FetchBigData";
import Header from "./Header";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Header,
        children: [
            {index: true, element: <div>Hello world</div>},
            {
                path: "route1",
                loader: () => fetch("https://jsonplaceholder.typicode.com/photos"), 
                Component: FetchBigData
            },
            {path: "route2", element: <div>2</div>}
        ]
    }, 
])

function UseNavigation() {
    return(
        <RouterProvider router = {router}></RouterProvider>
    );
}

export default UseNavigation;
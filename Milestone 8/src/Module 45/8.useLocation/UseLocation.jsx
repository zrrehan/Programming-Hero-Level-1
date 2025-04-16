import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./Component/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>This is home</div>
    },
    {
        path: "/about",
        Component: About
    }
])

function UseLocation() {
    return(
        <RouterProvider router = {router}></RouterProvider>
    );
}

export default UseLocation;
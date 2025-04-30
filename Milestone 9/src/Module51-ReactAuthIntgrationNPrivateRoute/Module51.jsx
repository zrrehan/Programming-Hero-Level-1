import { createBrowserRouter,RouterProvider } from "react-router";
import Root from "./Routes/Root";
import Login from "./Routes/Login"; 
import Home from "./Routes/Home";
import Register from "./Routes/Register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index: true, Component: Home},
            {path: "login", Component: Login},
            {path: "register", Component: Register}
        ]
    },
]);

function Module51() {
    return(
        <RouterProvider router={router} />
    )
}

export default Module51;
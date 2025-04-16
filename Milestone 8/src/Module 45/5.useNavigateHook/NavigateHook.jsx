import { createBrowserRouter,RouterProvider } from "react-router";
import Header from "./Components/Header";
import Route1 from "./Components/Route1";
import Route2 from "./Components/Route2";
import Home from "./Components/Home";

function NavigateHook() {
    const router = createBrowserRouter([
        {
            path: "/",
            Component: Header,
            children: [
                {index: true, Component: Home},
                {path: "1", Component: Route1},
                {path: "2", Component: Route2}
            ]
        }
    ])
    
    return(
        <RouterProvider router = {router}></RouterProvider>
    )
}

export default NavigateHook;
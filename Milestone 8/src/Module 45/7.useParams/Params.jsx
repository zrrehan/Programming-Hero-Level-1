import { createBrowserRouter, RouterProvider } from "react-router";
import Route1 from "./Components/Route1";
const router = createBrowserRouter([
    {
        path: "/:id",
        Component: Route1
    }
])

function Params() {
    return(
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Params;
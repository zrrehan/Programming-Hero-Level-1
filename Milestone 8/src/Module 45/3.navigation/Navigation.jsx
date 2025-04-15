import { createBrowserRouter, RouterProvider } from "react-router";
import Mobile from "./Components/Mobile";
import Laptop from "./Components/Laptop";
import Menu from "./Components/Menu";
import Header from "./Components/Header";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Header,
        children: [
            {index: true, Component: Menu},
            {path: "mobile", Component: Mobile},
            {path: "laptop", Component: Laptop}
        ]
    },
]);

function Navigation() {
    return(
        <RouterProvider router={router} />
    );
}

export default Navigation;
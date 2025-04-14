import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World</div>,
    },
    {
        path: "/about",
        element: <div>This is react router</div>
    }
]);

function BasicMain() {
    return (
        <RouterProvider router={router} />
    );
}

export default BasicMain
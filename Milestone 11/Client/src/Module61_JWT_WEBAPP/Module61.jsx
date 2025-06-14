import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Auth from "./Components/Auth";
import AuthProvider from "./Context/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>, 
        children: [
            {index: true, element: <h1>Hello world /</h1>}, 
            {path: "/my-job", element: <h1>my job</h1>},
            {
                path: "/auth",
                Component: Auth
            }
        ]
    }, 
])

function Module61() {
    return(
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    )
}

export default Module61;
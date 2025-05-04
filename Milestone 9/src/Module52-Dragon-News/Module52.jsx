import { RouterProvider } from "react-router";
import "./Module52.css"
import { router } from "./Router";
import AuthProvider from "./Context/AuthProvider";

function Module52() {
    return(
        <div>
            <AuthProvider>
                <RouterProvider router={router}></RouterProvider>
            </AuthProvider>
        </div>
    )
}

export default Module52;
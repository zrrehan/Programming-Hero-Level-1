import { createBrowserRouter,RouterProvider } from "react-router";
import Root from "./Routes/Root";
import Login from "./Routes/Login"; 
import Home from "./Routes/Home";
import Register from "./Routes/Register";
import { createContext } from "react";


export const AuthContext = createContext(null);
const userInfo = {name: "rehan"}

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

function NormalContextAPI() {
    return(
        <AuthContext value = {userInfo}>
            <RouterProvider router={router} />
        </AuthContext>
    )
}

export default NormalContextAPI;
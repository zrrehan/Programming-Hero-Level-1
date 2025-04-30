import { createBrowserRouter,RouterProvider } from "react-router";
import Root from "./Routes/Root";
import Login from "./Routes/Login"; 
import Home from "./Routes/Home";
import Register from "./Routes/Register";
import { createContext } from "react";
import AuthProvider from "./Context/AuthProvider";
import Orders from "./Routes/Orders";
import PrivateRoute from "./Routes/PrivateRoute";
import Profile from "./Routes/Profile";
import Dashboard from "./Routes/Dashboard";


// export const AuthContext = createContext(null);
// const userInfo = {name: "rehan"}

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index: true, Component: Home},
            {path: "login", Component: Login},
            {path: "register", Component: Register},
            {
                path: "orders",
                element: <PrivateRoute>
                    <Orders></Orders>
                </PrivateRoute>
            },
            {
                path: "profile",
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            }, 
            {
                path: "dashboard",
                element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            }
        ]
    },
]);

function SignInSignOut() {
    return(
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )
}

export default SignInSignOut;
import { createBrowserRouter, Navigate } from "react-router";
import Home from "./Routes/Home";
import Category from "./Components/Category";
import { Suspense } from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ViewMore from "./Routes/ViewMore";

const dataPromise = fetch("/news.json")
    .then((res) => res.json());


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            { index: true, element: <Navigate to= "/category/0"></Navigate>},
            {
                path: "/category/:id", 
                element: <Suspense fallback={<div><span className="loading loading-spinner loading-xl"></span></div>}>
                    <Category></Category>
                </Suspense>
            }
        ]
    },
    {
        path: "auth/register",
        Component: Register
    },
    {
        path: "auth/login",
        Component: Login
    },
    {
        path: "view-more/:id", 
        element: <Suspense fallback={<div><span className="loading loading-spinner loading-xl"></span></div>}>
            <ViewMore dataPromise = {dataPromise}></ViewMore>
        </Suspense>
    }

])
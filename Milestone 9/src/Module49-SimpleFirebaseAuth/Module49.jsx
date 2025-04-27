import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./1.GoogleAuth/Layouts/Root";
import { Component } from "react";
import Login from "./1.GoogleAuth/Login";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index: true, Component: Login}
        ]
    }
])

function Module49() {
    return(
        <div>
            <RouterProvider router = {router}></RouterProvider>
        </div>
    )
}

export default Module49;
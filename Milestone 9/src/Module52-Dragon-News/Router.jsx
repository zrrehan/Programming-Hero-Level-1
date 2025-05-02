import { createBrowserRouter } from "react-router";
import Home from "./Routes/Home";
import Category from "./Components/Category";
import { Suspense } from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {index: true, element: <h1>Default Route</h1>},
            {
                path: "/category/:id", 
                element: <Suspense fallback={<div><span className="loading loading-spinner loading-xl"></span></div>}>
                    <Category></Category>
                </Suspense>
            }
        ]
    }
])
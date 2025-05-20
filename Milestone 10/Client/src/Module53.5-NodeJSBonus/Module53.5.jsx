import { createBrowserRouter, RouterProvider } from "react-router"
import Phones from "./Components/Phones"
import Descrition from "./Components/Description"

function Module53_5() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <h1>Welcome to phoner dokan bro!</h1>
        }, 
        {
            path: "/phones",
            element: <Phones></Phones>,
            loader: () => fetch("http://localhost:3000/phone")
        },
        {
            path: "/phones/:id",
            element: <Descrition></Descrition>,
            loader: ({params}) => fetch(`http://localhost:3000/phone/${params.id}`)
        }
    ])
  
    return(
        <RouterProvider router={router} />
    )
} 

export default Module53_5
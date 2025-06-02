import { createBrowserRouter, Router, RouterProvider } from 'react-router';
import Layout from './Layout';
import Auth from './Routes/Auth';
import AuthProvider from './Context/AuthProvider';
import Home from './Routes/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {index: true, element: <Home></Home>}, 
            {path: "/find-job", element:<h1>Find Job</h1>}
        ]
    }, 
    {
        path: "/auth", 
        element: <Auth></Auth>
    }
])

function JobPortal() {
    return(
        <div>
            <AuthProvider>
                <RouterProvider router={router}></RouterProvider>
            </AuthProvider>
        </div>
    )
}

export default JobPortal;
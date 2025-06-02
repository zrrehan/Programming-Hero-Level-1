import { createBrowserRouter, Router, RouterProvider } from 'react-router';
import Layout from './Layout';
import Auth from './Routes/Auth';
import AuthProvider from './Context/AuthProvider';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {index: true, element: <h1>Home</h1>}, 
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
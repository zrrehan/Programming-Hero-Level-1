import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout';
import Home from './Routes/Home';
import Coverage from './Routes/Coverage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className='main-font'>
            <Layout></Layout>
        </div>,
        children: [
            {index: true, Component: Home}, 
            {
                path: "/coverage", 
                element: <Coverage></Coverage>
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)

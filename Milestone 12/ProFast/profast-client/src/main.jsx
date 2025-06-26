import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className='main-font'>
            <Layout></Layout>
        </div>,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)

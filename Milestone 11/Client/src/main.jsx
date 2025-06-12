import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import JobPortal from './Module58_59_Job_Portal/JobPortal'
import Module60 from './Module60_JWT/Module60'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <JobPortal></JobPortal> */}
        <Module60></Module60>
    </StrictMode>,
)

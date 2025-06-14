import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import JobPortal from './Module58_59_Job_Portal/JobPortal'
import Module60 from './Module60_JWT/Module60'
import Module61 from './Module61_JWT_WEBAPP/Module61'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <JobPortal></JobPortal> */}
        {/* <Module60></Module60> */}
        <Module61></Module61>
    </StrictMode>,
)

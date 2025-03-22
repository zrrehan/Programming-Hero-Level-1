import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Person() {
    let name = "Rehan"
    return (
        <>
            <h1>Person Details</h1>
            <p>This person name is {name}</p>
        </>
    );
}

function App() {
    return (
        <>
            <Person></Person>
            <Person></Person>
            <Person></Person>
        </>
    )
}

export default App

// Importing React and ReactDOM (assuming they are available globally)
console.log(React);
console.log(ReactDOM);

// Creating a React element using React.createElement()
// Syntax: React.createElement(type, props, children)
const myReactElement = React.createElement(
    "div",
    null,
    React.createElement("p", null, "Hello World")
);

// Equivalent JSX representation:
// <div>
//     <p>Hello World</p>
// </div>

// JSX allows us to write HTML-like syntax, which React converts into JavaScript.
const myJSXelement = (
    <div>
        <h1>Hello World</h1>
    </div>
);

// React doesn't understand JSX directly; Babel transpiles it into React.createElement() calls.

// Rendering the React element in the DOM

// This was written in the Main.jsx file
ReactDOM.createRoot(document.querySelector("#myDiv")).render(
    // myReactElement  // Render using React.createElement()
    myJSXelement // Render using JSX (which Babel converts to JS)
);

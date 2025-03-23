function Greeting() {
    return(
        <h1>Hello World</h1>
    );
}

function Main() {
    return (
        // Greeting is a component here
        <>
            <Greeting></Greeting> 
            <Greeting></Greeting>
        </>
    );
}

export default Main;
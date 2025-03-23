function Person({name, age}) {
    let adultPerson = <h1>{name} he is a adult Person</h1>
    let kid = <h1>{name} he is a kid</h1>

    return(
        age >= 18 ? adultPerson : kid
    );
}

function ConditionalRendering() {
    return(
        <>
            <Person name = "Edward" age = {30}></Person>
            <Person name = "Bruce" age = {28}></Person>
            <Person name = "Noor" age = {17}></Person>
        </>
    );
}

export default ConditionalRendering;
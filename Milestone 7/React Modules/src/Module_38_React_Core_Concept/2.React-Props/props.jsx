// Without Destucturing 
function Person(props) {
    // Props is a JS object 
    return(
        <>
            <p>Name is <b>{props.name}</b></p>
            <p>Studies in <b>{props.dept}</b> department</p>
        </>
    );
}

// With Destructuring 
function Dept({name, totalStudent = 0}) {
    return (
        <>
            <p>Department Name: {name}</p>
            <p>Total Students: {totalStudent}</p>
        </>
    );
}

function Props() {
    return( 
        <>
            <Person name = "Rehan" dept = "CS"></Person>
            <Person name = "Soumik" dept = "EEE"></Person>
            
            <Dept name = "CS" totalStudent={300}></Dept>
            <Dept name = "EEE" totalStudent={250}></Dept>
            <Dept name = "Physics"></Dept>
        </>
    );
}

export default Props;
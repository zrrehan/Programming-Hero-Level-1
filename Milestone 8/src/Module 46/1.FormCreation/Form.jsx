function Form() {
    function submitHandler(event) {
        event.preventDefault()
        console.log("submit handler Done");
        
        let username = event.target.username.value;
        console.log(username);
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" name = "username" className="input"/>
            <button className="btn">Submit</button>
        </form>
    );
}

export default Form;
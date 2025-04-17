function FromAction() {
    function fromActionHandle(fromData) {
        let username = fromData.get("username");
        let password = fromData.get("pass");
        console.log(username, password); 
    }
    return(
        <form action = {fromActionHandle}>
            <input type="text" name = "username" className="input"/>
            <br />
            <input type="password" name="pass" className="input" />
            <br />
            <button className="btn">SIuuuu</button>
        </form>
    )
}

export default FromAction;
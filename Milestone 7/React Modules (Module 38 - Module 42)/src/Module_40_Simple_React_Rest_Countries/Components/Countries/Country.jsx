function Country({info}) {
    console.log(info)
    return(
        <>
            <h1>Name: {info.name.common}</h1>
            <img src={info.flags.png} alt = {`${info.name.common} Flag`} />
            <h2>Independent: {info.independent ? "Free" : "Not Free"}</h2>
        </>
        
    );
}

export default Country;
import { useLocation } from "react-router";

function About() {
    const location = useLocation();
    console.log(location);
    
    return(
        <h1>About US! We are good human</h1>
    );
}

export default About;
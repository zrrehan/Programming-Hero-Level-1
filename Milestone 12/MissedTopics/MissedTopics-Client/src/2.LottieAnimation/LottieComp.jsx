import Lottie from "lottie-react";
import loadingAnimation from "./loading.json"
import sleepingPanda from "./sleep.json"

/**
    1. go to lottie files for the animation 
    2. go to lottie react npm for the package to integrate 
 */

function LottieComp() {
    return(
        <div>
            hello world lottie
            <Lottie style={{ width: "500px" }} animationData={loadingAnimation} loop={true} />
            <Lottie style={{width:"500px"}} animationData={sleepingPanda} loop = {true}></Lottie>
        </div> 
    )
}

export default LottieComp;
export default function OnClick() {
    function clickHander1() {
        console.log("clicked button 1");
    }

    const clickHander2 = () => {
        console.log("Clicked Button 2");
    }

    const add = (a, b) => {
        console.log(a + b);
    }
    return(
        <>
            {/* way 1 */}
            {/* <button onClick={ functionaName }>Click Me</button> */}
            <button onClick = {clickHander1}>Button 1</button>

            {/* way 2 */}
            <button  onClick = {clickHander2}>Button 2</button>

            {/* way 3 */}
            <button onClick={() => {
                console.log("Button 3 clicked")
            }}>Button 3</button>

            {/* With Parameters  */}
            <button onClick={() => add(20, 30)}>Button With Parameters</button>
        </>
    );
}
import { useState } from "react";

function MyApp (){
    const [start,setState] = useState(true)
    function clickTo() {
        setState((start) => !start)
    }
    return(
        <button onClick={clickTo}>
            {start ? "TRUE" : "FALSE"}
        </button>
    )
}
export default MyApp;
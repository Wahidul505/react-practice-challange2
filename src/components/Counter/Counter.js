import React, { useState } from "react";
function Count(){
    const [count,setCount] =useState(0);
    const increase =()=> setCount(count +1);
    const decrease =()=> count>0?setCount(count -1):0;
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}
export default Count;
// import React from 'react'
// import useCounter from './useCounter'

// const App = () => {
//   const {increment,decrement,count} = useCounter(0)
//   return <>
//   <div>
//     <button onClick={increment}>Increament</button>
//     <span>{count}</span>
//     <button onClick={decrement}>Decreament</button>
//     </div>
//   </>
// }

// export default App


import { useMemo, useState } from "react";

function App() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const square1 = useMemo(() => {
        console.log("Call Memo...");
        return count * count;
    }, [count]);

    const square = () => {
        console.log("Call Without M...");
        return count * count;
    }


    return (
        <>
            <h2>Square : {square()}</h2>
            <h2>Square : {square1}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <br /><br />

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </>
    );
}
export default App
import React from 'react'


const Counter = props => {
    const [count, setCount] = React.useState(0)

    return <>
        <h1 style={{ justifyContent: "center" }}>{count}</h1>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <input type="button" onClick={() => setCount(count + 1)} value="Increase" />
            <input type="button" onClick={() => setCount(count - 1)} value="Decrease" />
        </div>
    </>
}

export default Counter;
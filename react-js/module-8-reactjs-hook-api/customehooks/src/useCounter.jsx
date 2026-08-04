import React, { useState } from 'react'

const useCounter = (n = 0) => {
    const [count, setCount] = useState(n)
    const increment = () => {
        setCount(val => val + 1)
    }
    const decrement = () => {
        setCount(val => val - 1)
    }

    return {
        increment,
        decrement,
        count
    }
}

export default useCounter

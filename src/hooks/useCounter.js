import React, { useState } from 'react'

/* criando meu proprio hook
posso criar outros hooks dentro de um hook personalizado ou criar funçoes etc... */

export default (initialValue = 100) => {
    const [count, setCount] = useState(initialValue) 

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [count, inc, dec]
}
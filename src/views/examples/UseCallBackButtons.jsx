import React from 'react'

const UseCallbackButtons = props =>  {
    /* Existe um problema nisso esse componente sempre é renderizado mesmo que nao muda a logica dele
    o nome dele a func dele sempre é a mesma porem ele sempre é renderizado para resolver isso usamos o useCallback
    no doc pai veja mais nele */
    console.log('reder......')
    return (
        <div>
            <button className="btn" onClick={_ => props.inc(6)}>+6</button>
            <button className="btn" onClick={_ => props.inc(12)}>+12</button>
            <button className="btn" onClick={_ => props.inc(18)}>+18</button>
        </div>
    )

}

export default React.memo(UseCallbackButtons)
// export default UseCallbackButtons

/* preciso utilizar o memo se nao ele vai renderizar novamente */
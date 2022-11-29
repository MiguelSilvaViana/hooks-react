import React, { useEffect, useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum (a, b) {
    const future = Date.now() + 2000 //vai esperar 2 segundos antes de executa
    while(Date.now() < future) {} //espera de 2s aqui
    return a + b
}

const UseMemo = (props) => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    /* suponha q essa func soma seja um calculo mais complicado e vai demorar
    uma quantidade de tempo maior para ser executado */

    /* para entender que o n3 estava ficando lerdo so descomentar o codigo abaixo e comentar o resto dos result */
    // const result = sum(n1, n2)
    

    /* porem nao faz sentido o n1 e n2 sao uma operaçao longa e lenta teoricamente com nosso simulado de 2s
    nao faz sentido o n3 esta lerdo igual eles sendo que n3 é algo simples existe 2 formas diferentes de resolver isso
    primeira use effect com use state */

    /* explicaçao quando o n1 ou n2 for modificado ai chama essa func so vai chama a func soma
    quando realmente os valores corretos forem modificados e nao o n3 que tem nada haver so descomentar para ver o codigo funcionando
    e comentar os outros results*/
    
    // const [result, setResul] = useState(0) 
    // useEffect(function(){
    //     sum(n1, n2)
        
    // }, [n1, n2])

    /* agora para fazer essa mesma coisa porem com useMemo utilizando ele 
    primeiro parametro uma funçao igual useEffect segundo parametro as dependencias que no caso
    vai ser n1 e n2 que sao os que tem haver com o calculo porem tem que usar o useCallback junto*/
    const result = useMemo(() => sum(n1, n2), [n1, n2])
    
    
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input type="number" className="input"
                value={n1} onChange={e => setN1(parseInt(e.target.value))} />
                <input type="number" className="input"
                value={n2} onChange={e => setN2(parseInt(e.target.value))} />
                <input type="number" className="input"
                value={n3} onChange={e => setN3(parseInt(e.target.value))} />
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo

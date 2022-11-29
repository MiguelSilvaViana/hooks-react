import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallBackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    /* mesmo que use essa callBack retornando a func setCount que é renderizado uma unica vez
    se eu nao usar o memo na hora de exportar ele vai do mesmo jeito renderizar os valores novamente
    por isso alem de callBack e retornar um setCount que é uma func que renderiza uma unica vez eu tenho que exportar 
    com useMemo entao não 
    e apenas useCallBack e sim uma mistura dele com use memo */

   const inc =  useCallback(function (delta) {
        /* eu nao dependo mais do count para mudar e sim de current entao nao to nem ai para o count
        renderizando varias vezes tambem é por isso preciso utilizar o react memo na hora de exporta os botoes que eu
        exportei se eu nao usar o memo na hora de exportar ele vai renderizar novamente pois vai precisar do count */
        setCount(curr => curr + delta)
        
    }, [setCount]) /* ao inves de depender do count vamos depender do setCount pois é criada uma unica vez */

    
    /* como a funçao inc vai ser criada uma unica vez e vai ser sempre passado o mesmo parametros para os buttoes
    entao ele nao renderiza novamente pois é os mesmo parametros e para isso o UseMemo verifica que é o mesmo parametro*/

    /* useCallBack é utilizado para voce que sempre quer passar uma funçao a mesma funçao identica para o componente e nao quer
    que ele fique renderizando novamente porque nao tem o que renderiza a props dele nao muda nada dele muda é a mesma funcao
    nao faz sentido renderizar novamente */
    
    // function inc (delta) {
    //     setCount(count + delta)
    // }

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback

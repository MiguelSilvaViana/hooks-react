import React, {useEffect, useRef, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge (s1, s2) {
    return [... s1].map(function(e, i) {
        return `${e}${s2[i] || ''}`
    }).join('')
}


const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0) /* me retorna referencia de um obj e inicia em 0 como defeni*/
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)
    
    /* alterar valor de count para saber quantas vezes o componente foi renderizado */

    // count.current = count.current + 1;
    // count.current++ /* se eu deixar assim ele pegaria todas alteraçoes da pagina de todos estados */

    /* outra forma é fazer isso dentro de um use effect */
    useEffect(function () {
        count.current++ /* nesse caso ele nao vai chamar isso em todas as renderizaçoes
        mas sim apenas nas de que value1 for alterado as duas resposta acima
        comentadas funcionam porem posso fazer assim tambem para so alterar quando value1 for alterado */ 
        
        /* sempre que digita algo aqui o foco vai para o outro e vice versa a msm logica */
        myInput2.current.focus()
    }, [value1]) /* posso por , e outro valor como no caso valor1, valor2 posso ter so 1 tambem*/
    

    
    useEffect(function (){
        myInput1.current.focus()
        count.current++
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" 
                ref={myInput1}
                value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>

            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <input type="text" className="input" 
                ref={myInput2}
                value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef

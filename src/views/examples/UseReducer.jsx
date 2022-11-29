import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState2, change } from '../../store'

/* esses import ai em cima é do meu segundo reducer */

const initialState = {
    cart: [],
    products: [],
    user: null,
    // quero trabalhar so no number
    number: 0
}

// objetivo funçao reducer é pega estado atual e para cada açao que acontecer
// evoluir o estado alterando algum produto

function reducer(state, action) {
    switch(action.type) {
        case 'numberAddTwo':
            return {...state, number: state.number + 2}
        case 'login':
            return {... state, user: {name: action.payload}}
        default:
            return state // caso passem nada
    }
}

const UseReducer = (props) => {
    
    // parametros sao estado inicial e uma funçao que eu vou usar
    // para evoluir alterar o estado inicial
    // e do outro lado um array com state e exec que servem para
    // state pegar o estado de algum obj da initialState por exemplo
    // state.number e o exec é para executar funçoes
    // eu passo por exemplo no exec um objeto igual la embaixo para
    // dependendo do que tiver dendo do obj ele vai no switch case e 
    // executa o que eu mandei ele executar
    // exec vai chamar a funçao reducer aqui embaixo e de acordo com
    // oque eu pedir pra ela ele vai fazer oque pedi no caso pedi +2
    // coloquei um obj e dei os parametros pro obj e passei pro exec
    // ai ele chama a func reduce com esses parametros obs esse exec eu mudei para
    // dispatch pois é uma convenção
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const [num, dispatch2] = useReducer(change, initialState2)

    const [inpu, setInpu] = useState(0)
    
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            
            <SectionTitle title="Aula #01"/>
            <div className="center">
                <span className="text">{state.user 
                    ? <span>{state.user.name}</span>
                    : <span>Sem Usuário</span> }</span>
                 
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                    
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberAddTwo'})}>+2</button>
                </div>
            </div>
            
            {/* x7 dividir por 25 e fazer parse para int desafio e por ultimo adicionar
            n que vai ser um número qualquer*/}
            <SectionTitle title="Desafio #01"/>
            <div className="center">
                <span className="text">{num.number}</span>
                <div>
                    <button className="btn"
                    onClick={() => dispatch2({type: 'multiply_x7'})}>x7</button>
                    
                    <button className="btn"
                    onClick={() => dispatch2({type: 'divide_25'})}>/25</button>

                    <button className="btn"
                    onClick={() => dispatch2({type: 'int'})}>Int</button>
                    
                    <div>
                        <input type="number" className="input" value={inpu} onChange={(e) => setInpu(e.target.value)} />
                        <button className="btn"
                        onClick={() => dispatch2({type: 'custom', payload: inpu})}>Custom</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UseReducer

import React, {useContext, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'


const UseContext = (props) => {

    const context = useContext(DataContext)
    // dentro disse do arquivo que ele vem tem 1 obj
    // com um numero em um texto ele foi definido em dataContext

    // como passei meu state do context em um setState antes
    // coloquei a func set neles tambem isso no app.jsx
    // ou seja posso modificar eles

    const {number, text, setNumber, setText} = useContext(AppContext)

    useEffect(() => {
        if (number > 1250) {
            setText('EITA')
        }
    }, [number])
    

    function addNumber(n) {
        context.setState({
            ...context.state, /* altero estado restaurando todos estados anterior e vou sobrescrever apenas 1 atributo que quero muda alterando ele */
            number: context.state.number + n
        })
    }
    
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                {/* dessa forma eu tenho acesso aos dados
                desse context que vem de outro arquivo */}
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
                <div>
                    <button className="btn"onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn"onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                    onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn"
                    onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>


        </div>
        
        
    )
}

export default UseContext


/*
Imagina uma arvore de componentes eles para se comunicar acabam
nao tendo acesso a alguns componentes precisando fazer uma linha
direto entao para isso serve o dataContext caso eu queira compartilhar
algo entre os componentes eu utilizo datacontext ele meio que cria
uma bolha no topo da minha aplicaçao e amarzena dados la caso eu
queira esses dados de algum outro componente basta eu levar esse
componente ate a bolha e pegar 
*/
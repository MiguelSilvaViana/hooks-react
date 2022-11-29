import React, {useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFatorial(num) {
    const n = parseInt(num);
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

function check (n) {
    if (n % 2 === 0) return "par"
    return "impar"
}


const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [number2, setnumber2] = useState(1)
    const [verify, setVerify] = useState("impar")

    // setFatorial(calcFatorial(number)) nao posso fazer direto assim no setState de um componente porque se nao
    // ele renderiza infinitamente

    useEffect(function() {
        setVerify(check(number2))
    }, [number2])

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])
    
    /* um exemplo de colateral é alterar o titulo da pag por exemplo abaixo
    quando meu fatorial passar de x ele vai alterar meu titulo da pagina q é outro elemento */

    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = "colateral"
        }
    }, [fatorial]) /* ele chama sempre que o valor de fatorial modificar */

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            
            {/* efeito colateral voce modificou alguma coisa da sua aplicaçao que gerou 
            alteraçao em outro componente outro estado componente no caso abaixo o fatorial
            de acordo com meu number muda o fatorial que é outro componente muda esse é um efeito colateral*/}
            <SectionTitle title="exercicio #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial} </span>
                </div>
                <input type="number" className="input" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
                <span className="text">{number}</span>
            </div>
            <SectionTitle title="exercicio #02"/>
            <div className="center">
                {/* par ou impar */}
                <span className="text">Par === {verify === "par" ? "true" : "false"}</span>
                <span className="text red">ImPar === {verify === "par" ? "false" : "true"}</span>
                <input type="number" className="input" value={number2} onChange={e => setnumber2(e.target.value)}/>
                <span className="text">{number2}</span>
            </div>
        </div>
    )
}

export default UseEffect


/* resumao voce mudou um dado da sua aplicaçao e esse dado vai impactar na mudança de outro dado
aqui nesse exemplo o number quando é alterado ele impacta o fatorial esse 
é o efeito colateral */

import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, { data } from '../data/DataContext'
import Store from '../data/Store'

const App = props => {
    // ao inves de passar so meu data posso aruma ele
    // para modificar no futuro caso queira com setState
    const [state, setState] = useState(data)
    // esse state vai ser passado pra todos componente utilizando useContext ele é o data
    
    return (
        <Store>
            <DataContext.Provider value={{state, setState}}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )  
}

export default App
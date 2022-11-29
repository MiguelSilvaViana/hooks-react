import React from 'react'

export const data = {
    number: 123,
    text: 'Context API'
}

// isso é meu data content criei ele com react
const DataContext = React.createContext(data)
export default DataContext
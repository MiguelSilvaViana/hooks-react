import {numberAdd2} from './actions/number'

/* arquivos para utilizar com user reducer */

export const initialState2 = {
    cart: [],
    products: [],
    user: null,
    number: 0
}


export function change(num, action) {
    
    // num é meu estado inicial aquele array que passo no inicio o initial state

    switch(action.type) {
        case 'multiply_x7':
            return {...num, number: num.number === 0 ? num.number = 7 : num.number * 7}
        case 'divide_25':
            return {...num, number: num.number / 25}
        case 'int':
            return {...num, number: parseInt(num.number)}
        case 'custom':
            return {...num, number: num.number + +action.payload}
        default:
            return num
    }
}
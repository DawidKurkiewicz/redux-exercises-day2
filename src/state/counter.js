const INC = 'counter/INC'
const DEC = 'counter/DEC'


const INITIAL_STATE = {
    number: 0
}


export const increment = (value = 1) => ({
    type: INC,
    value
})


export const decrement = (value = 1) => ({
    type: DEC,
    value
})


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INC:
            return (state + action.value)
        case DEC:
            return (state - action.value)
        default:
            return state
    }
}
const INC = 'counter/INC'
const DEC = 'counter/DEC'
const RESET = 'counter/RESET'



const INITIAL_STATE = {
    number: 0
}

export const inc = () => ({
    type: INC

})

export const dec = () => ({
    type: DEC

})
export const reset = () => ({
    type: RESET
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INC:
            return {
                number: state.number + 1
    }
        case DEC:
            return {
                number: state.number - 1
            }
            case RESET:
            return {
                number: state.number = 0
            }
        default:
            return state
    }
}
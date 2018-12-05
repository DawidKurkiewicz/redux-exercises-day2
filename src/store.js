import { combineReducers, createStore } from 'redux'
import counter, {inc, dec } from './state/counter'




const rootReducer = combineReducers({
    counter
})


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.increaseCounter = () => store.dispatch(inc())
window.decreaseCounter = () => store.dispatch(dec())


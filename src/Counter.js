import React from 'react'
import { connect } from 'react-redux'
import { inc } from './state/counter'
import { dec } from './state/counter'
import { reset } from './state/counter'




const mapStateToProps = state => ({
    currentValue: state.counter.number

})


const mapDispatchToProps = dispatch => ({
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec()),
    reset: () => dispatch(reset())


})

const Counter = (props) => {
    return (
        <div>
            <h1>Current Value: {props.currentValue}</h1>
            <button onClick={() =>props.inc()}>+</button>
            <button onClick={() => props.dec()}>-</button>
            <button onClick={props.reset}>reset</button>


        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
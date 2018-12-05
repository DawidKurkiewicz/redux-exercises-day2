import React from 'react'
import { connect } from 'react-redux'




const mapStateToProps = store => ({
})


const mapDispatchToProps = dispatch => ({

})

const Counter = props => {
    return <div>
        <h1>Count state: {}</h1>
        <button onClick={}>+</button>
        <button onClick={}>-</button>

    </div>
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
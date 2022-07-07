import React from 'react';
import { connect } from 'react-redux';// this is HOC under the hood that wrapps our comp and give props from store
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

const Counter = ({value, inc, dec, rnd}) => {
    return(
        <>
            <div>{value}</div>
            <button onClick={inc}>inc</button>
            <button onClick={rnd}>rnd</button>
            <button onClick={dec}>dec</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        value: state.value,
    }
}

const mapDispatchToProps = (dispatch) => {
    const {inc,dec,rnd} = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const rndValue = Math.floor(Math.random() * 10);
            rnd(rndValue);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// every time when state will update, function connect will init and change the value

// now we use benefits of redux and also we can replase mad pispatch to props only with actions in func connect

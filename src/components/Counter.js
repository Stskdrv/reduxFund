import React from 'react';

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

export default Counter;
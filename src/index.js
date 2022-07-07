import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
//import { inc, dec, rnd} from './actions'; => 
import * as actions from './actions'; // just for object notation and thet use this object in bindActionCreator
import reducer from './reducer';

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

// here we trying to ubderstand all redux flow and all functions under the hood of redux
// const incDispatch = () => dispatch(inc());
// const rndDispatch = (value) => dispatch(rnd(value));
// const decDispatch = () => dispatch(dec());

// but then we can use FFC construction:
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// } // it is the same like bindActionCreatorS from redux lib

// const incDispatch = bindActionCreator(inc, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);
// const decDispatch = bindActionCreator(dec, dispatch);

// but it's not the end of our optimization< let's see how we can improve bind action creator with object anf function from lib



const { inc, dec, rnd } = bindActionCreators(actions, dispatch) // here it is how redux works

subscribe(update);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});



// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>
);



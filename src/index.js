import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
//import { inc, dec, rnd} from './actions'; => 
// import * as actions from './actions'; // just for object notation and thet use this object in bindActionCreator
import reducer from './reducer';
import App from './components/App';
import { Provider } from 'react-redux';

const store = createStore(reducer);
// const { dispatch, getState } = store; => we will use it in childerns(check step by step in github commits)


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



// const { inc, dec, rnd } = bindActionCreators(actions, dispatch) // here it is how redux works // the same - will use in in childerns




// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      {/* <Counter value={getState().value} inc={inc} rnd={() => {
        const randomValue = Math.floor(Math.random() * 10);
        rnd(randomValue);
      }} dec={dec}/> */}
      {/* Provider share all our store between all components-childrens, store holds all data, reducers, etc. Provider automaticly checks all updates of state and say - WE NEED UPDATEs */}
      <Provider store={store}>
        <App/>
      </Provider>
    </>
  </React.StrictMode>
);



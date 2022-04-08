import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
let popupState = false;
const calendarState = false;

function reducer(state = popupState, action ){
  if(action.type === 'toggle'){
    return !state;
  }
  else{
    return state
  }
}

function reducer2(state = calendarState, action ){
  if(action.type === 'toggleCalendar'){
    return !state;
  }
  else{
    return state
  }
}

let store = createStore(combineReducers({reducer,reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

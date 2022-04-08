import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
let popupState = false;
let calendarState = false;
let addState = [{plusMinus:'',type:'구분',cost:'0',content:'내역입력'}];

function popup(state = popupState, action ){
  if(action.type === 'toggle'){
    return !state;
  }
  else{
    return state
  }
}
function calendar(state = calendarState, action ){
  if(action.type === 'toggleCalendar'){
    return !state;
  }
  else{
    return state
  }
}
function add(state = addState ,action){
  if(action.type === 'add'){
    let copy = [...state];
    copy.push(action.payload);
    return copy;
  }
  else{
    return state
  }
}
let store = createStore(combineReducers({popup,calendar,add}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

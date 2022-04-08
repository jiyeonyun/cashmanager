import { useState } from 'react';
import { connect } from 'react-redux';
import styles from './app.module.css';
import Calender from './components/calender/calender';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import List from './components/list/list';
import Popup from './components/popup/popup';
import Total from './components/total/total';
function App(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.innerWrap}>
        <Header/>
        <Total/>
        <List/>
        <Footer/>
        {
          props.popup ? <Popup/> : <></>
        }
        {
          props.calendar ? <Calender/> : <></>
        }
      </div>
    </div>
  );
}


function stateProps(state){
  return{
    popup : state.reducer,
    calendar :state.reducer2
  }
}

export default connect(stateProps)(App);

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
        <Total />
        <List/>
        <div className={styles.footer}>
        <Footer/>
        </div>
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
    popup : state.popup,
    calendar :state.calendar,
    add: state.add
  }
}

export default connect(stateProps)(App);

import React from 'react';
import styles from './footer.module.css';
import {connect} from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faCalendar  } from '@fortawesome/free-solid-svg-icons';
const Footer = (props) => {
    return(
        <footer className={styles.footer}>
            <button className={styles.button}
                    onClick={()=>{props.dispatch({type:'toggle'})}}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon}/>
            </button>
            <button className={styles.button}
                    onClick={()=>{props.dispatch({type:'toggleCalendar'})}}>
                <FontAwesomeIcon icon={faCalendar} className={styles.icon}/>
            </button>
        </footer>
    );
};

function stateProps(state){
    return{
        popup : state.popup,
        calendar : state.calendar
    }
}
export default connect(stateProps)(Footer);
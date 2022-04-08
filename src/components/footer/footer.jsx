import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faCalendar  } from '@fortawesome/free-solid-svg-icons';
const Footer = (props) => {
    return(
        <footer className={styles.footer}>
            <button className={styles.button}>
                <FontAwesomeIcon icon={faPlus} className={styles.icon}/>
            </button>
            <button className={styles.button}>
                <FontAwesomeIcon icon={faCalendar} className={styles.icon}/>
            </button>
        </footer>
    );
};

export default Footer;
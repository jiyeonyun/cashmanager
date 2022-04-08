import React from 'react';
import styles from './total.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp,faArrowDown  } from '@fortawesome/free-solid-svg-icons';

const Total = (props) => {
    return(
        <div className={styles.totalwrap}>
            <div className={styles.total}>
                <h1 className={styles.totalMoney}>0</h1>
                <div className={styles.plusMinus}>
                    <div className={styles.plus}> 
                        <FontAwesomeIcon icon={faArrowUp} className={styles.icon} style={{color:'rgb(7, 146, 7)'}}/>
                        <span className={styles.plusMinsCount}>0</span>
                    </div>
                    <div className={styles.minus}>
                        <FontAwesomeIcon icon={faArrowDown} className={styles.icon} style={{color:'rgb(209, 65, 65)'}}/>
                        <span className={styles.plusMinsCount}>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;
import React from 'react';
import styles from './listItems.module.css';

const ListItems = (props) => {
    return(
        <li className={styles.li}>
            <span className={styles.type}>{props.type}</span>
            <div className={styles.nameCash}>
                <span className={styles.name}>{props.content}</span>
                <span className={styles.cash}>{props.cost}₩</span>
            </div>
        </li>

    );
};


export default ListItems;
import React from 'react';
import styles from './listItems.module.css';
const ListItems = (props) => {
    return(
        <li className={styles.li}>
            <span className={styles.type}>종류변수</span>
            <div className={styles.nameCash}>
                <span className={styles.name}>내역</span>
                <span className={styles.cash}>돈얼마임</span>
            </div>
        </li>

    );
};

export default ListItems;
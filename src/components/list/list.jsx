import React from 'react';
import ListItems from '../listItmes/listItems';
import styles from './list.module.css';
const List = (props) => {
    return(
        <div className={styles.listWrap}>
            <header className={styles.header}>
                <h3 className={styles.listName}>전체 내역</h3>
                <div className={styles.listItems}>
                    <span className={styles.listItem}>전체</span>
                    <span className={styles.listItem}>수입</span>
                    <span className={styles.listItem}>지출</span>
                    <span className={styles.listItem}>초기화</span>
                </div>
            </header>
            <ul className={styles.list}>
                <ListItems/>
            </ul>
        </div>
    );
};

export default List;
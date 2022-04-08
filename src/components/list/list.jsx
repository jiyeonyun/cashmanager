import React from 'react';
import ListItems from '../listItmes/listItems';
import styles from './list.module.css';
import {connect} from 'react-redux';
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
            <div className={styles.listWrap}>
            <ul className={styles.list}>
                {props.add.map(add=>(
                <ListItems
                        key={add.id}
                        plusMinus={add.plusMinus}
                        type={add.type}
                        cost={add.cost}
                        content={add.content}
                />
            )
            )}    
            </ul>
            </div>
        </div>
    );
};

function stateProps(state){
    return{
        add : state.add
    }
}
export default connect(stateProps)(List);
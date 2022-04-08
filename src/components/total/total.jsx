import React, { useEffect, useState } from 'react';
import styles from './total.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp,faArrowDown  } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
    
const Total = (props) => {
    const [totalCount,setTotalcount] =useState(0);
    const [plusCount,setPluscount] = useState(0);
    const [minusCount,setMinuscount] = useState(0);
    const length = props.add.length;
    const type = props.add[length-1].plusMinus
    const cost  =props.add[length-1].cost
    useEffect(()=>{
        if( type === '수입'){
        setPluscount(plusCount+Number(cost));
        }
        else if(type === '지출'){
        setMinuscount(minusCount+Number(cost));
        }
    },[props.add]);
    
    useEffect(()=>{
        setTotalcount(plusCount-minusCount);
    },[plusCount,minusCount])
    return(
        <div className={styles.totalwrap}>
            <div className={styles.total}>
                <h1 className={styles.totalMoney}>{Number(totalCount).toLocaleString()}원</h1>
                <div className={styles.plusMinus}>
                    <div className={styles.plus}> 
                        <FontAwesomeIcon icon={faArrowUp} className={styles.icon} style={{color:'rgb(7, 146, 7)'}}/>
                        <span className={styles.plusMinsCount}>{plusCount}</span>
                    </div>
                    <div className={styles.minus}>
                        <FontAwesomeIcon icon={faArrowDown} className={styles.icon} style={{color:'rgb(209, 65, 65)'}}/>
                        <span className={styles.plusMinsCount}>{minusCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

function stateProps(state){
    return{
        add : state.add
    }
}
export default connect(stateProps)(Total);
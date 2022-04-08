import React, { useState } from 'react';
import styles from './popup.module.css';
import {connect, useStore} from 'react-redux';

const Popup = (props) => {
    const [plus,setPlus] = useState(false);
    const [minus,setMinus] = useState(false);
    const onClick = (e)=>{
        if(e.target.innerText == '수입'){
            setPlus(true);
            setMinus(false);
        }
        else{
            setPlus(false);
            setMinus(true);
        }
    }
    return(
        <div className={styles.wrap}>
            <div className={styles.popup}>
                <div className={styles.buttons}>
                    <button className={styles.button} 
                            onClick={onClick}
                            style={{color: plus ? 'white':'rgb(8, 144, 47)',backgroundColor: plus ? 'rgb(8, 144, 47)' : 'whitesmoke' }}> 
                            수입 
                    </button>
                    <button className={styles.button}
                            onClick={onClick}
                            style={{color: minus ? 'white':'rgb(179, 26, 26)',backgroundColor: minus ? 'rgb(179, 26, 26)' : 'whitesmoke' }}> 
                            지출 
                    </button>
                </div>
                <div className={styles.moneyWrap}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <span className={styles.span}>종류</span>
                            <select  className={styles.input} name="type" id="type">
                                <option value="식비">식비</option>
                                <option value="교통/차량">교통/차량</option>
                                <option value="여가생활">여가생활</option>
                                <option value="쇼핑">쇼핑</option>
                                <option value="생활비">생활비</option>
                                <option value="월급">월급</option>
                                <option value="용돈">용돈</option>
                                <option value="기타">기타</option>
                            </select>
                        </li>
                        <li className={styles.li}>
                            <span className={styles.span}>금액</span>
                            <input className={styles.input} type="number" name="money" id="money" placeholder='원' />
                        </li>
                        <li className={styles.li}>
                            <span className={styles.span}>내용</span>
                            <input className={styles.input} type="text" />
                        </li>
                    </ul>
                </div>
                <div className={styles.buttons2}>
                    <button 
                        className={styles.Pbutton}
                        onClick={()=>{props.dispatch({type:'toggle'})}}
                    >
                    저장
                    </button>
                    <button 
                        className={styles.Pbutton}
                        onClick={()=>{props.dispatch({type:'toggle'})}}
                    >
                    닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

function stateProps(state){
    return{
        popup : state.reducer
    }
}

export default connect(stateProps)(Popup);

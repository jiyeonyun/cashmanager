import React, { useRef, useState } from 'react';
import styles from './popup.module.css';
import {connect, useStore} from 'react-redux';

const Popup = (props) => {
    const [plus,setPlus] = useState(false);
    const [minus,setMinus] = useState(false);
    const [plusMinus ,setPlusMinus] = useState('');
    const [type,setType] = useState('');
    const [cost,setCost]  = useState();
    const [content,setContent] = useState('');
    const inputRef = useRef('');
    const contentRef = useRef('');
    const selectRef = useRef('');
    const buttonClick = (e)=>{
        if(e.target.innerText == '수입'){
            setPlus(true);
            setMinus(false);
            setPlusMinus('수입');
        }
        else{
            setPlus(false);
            setMinus(true);
            setPlusMinus('지출');
        }
    }

    const onChange = (e)=>{
        setType(selectRef.current.value);
        setCost(inputRef.current.value);
        setContent(contentRef.current.value);
    }

    
    return(
        <div className={styles.wrap}>
            <div className={styles.popup}>
                <div className={styles.buttons}>
                    <button className={styles.button} 
                            onClick={buttonClick}
                            style={{color: plus ? 'white':'rgb(8, 144, 47)',backgroundColor: plus ? 'rgb(8, 144, 47)' : 'whitesmoke' }}> 
                            수입 
                    </button>
                    <button className={styles.button}
                            onClick={buttonClick}
                            style={{color: minus ? 'white':'rgb(179, 26, 26)',backgroundColor: minus ? 'rgb(179, 26, 26)' : 'whitesmoke' }}> 
                            지출 
                    </button>
                </div>
                <div className={styles.moneyWrap}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <span className={styles.span}>종류</span>
                            <select onChange={onChange} ref={selectRef} className={styles.input} name="type" id="type">
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
                            <input onChange={onChange} className={styles.input} ref={inputRef} type="number" name="money" id="money" placeholder='원' />
                        </li>
                        <li className={styles.li}>
                            <span className={styles.span}>내용</span>
                            <input onChange={onChange} className={styles.input} ref={contentRef} type="text" />
                        </li>
                    </ul>
                </div>
                <div className={styles.buttons2}>
                    <button 
                        className={styles.Pbutton}
                        onClick={()=>{
                                        props.dispatch({type:'toggle'});
                                        props.dispatch({type:'add',payload:{id:Date.now(),plusMinus:`${plusMinus}`,type:`${type}`,cost:`${cost}`,content:`${content}`}});
                                    }
                                }
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
        popup : state.popup,
        add : state.add
    }
}

export default connect(stateProps)(Popup);

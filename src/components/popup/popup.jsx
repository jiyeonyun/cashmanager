import React from 'react';
import styles from './popup.module.css';

const Popup = (props) => {
    return(
        <div className={styles.wrap}>
            <div className={styles.popup}>
                <div className={styles.buttons}>
                    <button className={styles.button} style={{color:'rgb(8, 144, 47)'}}> 수입 </button>
                    <button className={styles.button}> 지출 </button>
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
                    <button className={styles.Pbutton}>저장</button>
                    <button className={styles.Pbutton}>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
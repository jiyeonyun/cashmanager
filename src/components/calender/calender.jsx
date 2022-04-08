import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './calender.module.css';
import moment from 'moment';

const Calender = (props) => {
    const[value,onChange] =useState(new Date());
    return(
        <div className={styles.calendarWrap}>
            <Calendar 
                onChange={onChange} 
                value={value}
                minDetail="month"
                maxDetail="month" 
                navigationLabel={null}
                showNeighboringMonth={false}
                />
        </div>
    );
};

export default Calender;
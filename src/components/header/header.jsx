import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return(
        <header className={styles.header}>
            <p className={styles.title}>Daily Pay</p>
        </header>
    );
};

export default Header;
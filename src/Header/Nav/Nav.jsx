import React from "react";
import styles from './Nav.module.css'

export const Nav = () => {
    return <div className={styles.nav}>
        <a href="">Главная</a>
        <a href="">Скилы</a>
        <a href="">Проэкты</a>
        <a href="">Контакты</a>
    </div>
}
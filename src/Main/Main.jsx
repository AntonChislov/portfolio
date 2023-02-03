import React from "react";
import styles from './Main.module.css'

export const Main = () => {
    return <div className={styles.mainBlock}>
        <div className={styles.container}>
            <div className={styles.text}>
                <span>Какой-то спан</span>
                <h1>Какой-то заголовок</h1>
                <p>Какой-то большой текст</p>
            </div>
            <div className={styles.photo}></div>
        </div>
    </div>
}
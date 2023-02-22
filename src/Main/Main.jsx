import React from "react";
import styles from './Main.module.css'

export const Main = () => {
    return <div className={styles.mainBlock}>
        <div className={styles.container}>
            <div className={styles.text}>
                <span>Привет!</span>
                <h2>Меня зовут Антон Числов.</h2>
                <p>Я front-end разработчик</p>
            </div>
            <div className={styles.photo}></div>
        </div>
    </div>
}
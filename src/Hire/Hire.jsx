import React from "react";
import styles from './Hire.module.css'

export const Hire = () => {
    return <div className={styles.hireBlock}>
        <div className={styles.container}>
            <h3 className={styles.title}>Рассматриваю варианты удаленной работы</h3>
            <div className={styles.hireButton}>Нанять меня</div>
        </div>
    </div>
}
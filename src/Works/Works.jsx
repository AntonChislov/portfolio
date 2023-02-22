import React from "react";
import styles from './Works.module.css'
import {Work} from "./Work/Work";

export const Works = () => {
    return <div className={styles.worksBlock}>
        <div className={styles.container}>
            <h2 className={styles.title}>Заголовок Работ</h2>
            <div className={styles.worksBox}>
                <Work />
                <Work />
            </div>
        </div>
    </div>
}
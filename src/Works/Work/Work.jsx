import React from "react";
import styles from './Work.module.css'

export const Work = () => {
    return <div className={styles.workBlock}>
        <div className={styles.preview}>
            <div className={styles.viewButton}>Смотреть</div>
        </div>
        <div className={styles.descriptionBox}>
            <div className={styles.projectName}>Название проекта</div>
            <div className={styles.description}>
                Краткое описание
            </div>
        </div>
    </div>
}
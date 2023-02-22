import React from "react";
import styles from './Contact.module.css'

export const Contact = () => {
    return <div className={styles.contactBlock}>
        <div className={styles.container}>
            <h3 className={styles.title}>Контакты</h3>
            <form className={styles.fieldBox}>
                <input className={styles.input1} type="text"/>
                <input className={styles.input2} type="text"/>
                <textarea className={styles.textarea}></textarea>
            </form>
            <div className={styles.submitButton}>Отправить</div>
        </div>
    </div>
}
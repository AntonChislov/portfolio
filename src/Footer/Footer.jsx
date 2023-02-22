import React from "react";
import styles from './Footer.module.css'
import {Link} from "./Link/Link";

export const Footer = () => {
    return <div className={styles.footerBlock}>
        <div className={styles.container}>
            <h3 className={styles.title}>Антон Числов</h3>
            <div className={styles.linkBox}>
                <Link/>
                <Link/>
                <Link/>
                <Link/>
            </div>
            <h5>2023 Все права защищены</h5>
        </div>
    </div>
}
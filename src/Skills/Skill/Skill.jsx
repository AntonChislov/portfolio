import React from "react";
import styles from './Skill.module.css'

export const Skill = ({title}) => {
    return <div className={styles.skill}>
        <div className={styles.icon}></div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur consectetur deserunt, dicta
            distinctio ea, eius eum expedita in ipsam libero magni nam nemo, nulla numquam quaerat sit unde vitae?
        </p>
    </div>
}
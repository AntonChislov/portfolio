import React from "react";
import styles from './Skills.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return <div className={styles.skillsBlock}>
        <div className={styles.container}>
            <h2 className={styles.title}>Заголовок Скиллов</h2>
            <div className={styles.skillsBox}>
                <Skill title={'JS'}/>
                <Skill title={'HTML'}/>
                <Skill title={'CSS'}/>
                <Skill title={'React'}/>
                <Skill title={'TypeScript'}/>
                <Skill title={'MUI'}/>
            </div>
        </div>
    </div>
}
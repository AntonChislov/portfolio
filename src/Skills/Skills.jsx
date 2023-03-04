import React from "react";
import styles from './Skills.module.css'
import {Skill} from "./Skill/Skill";
import imgCSS from './../assets/icon/919826.png'
import imgJS from './../assets/icon/2445b500-869d-498e-ae47-2a3e5820e3c5.png'
import imgReact from './../assets/icon/React-icon.svg.png'

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.container}>
                <h2 className={styles.title}>Заголовок Скиллов</h2>
                <div className={styles.skillsBox}>
                    <Skill img={imgJS} title={'JS'}/>
                    <Skill img={imgCSS} title={'CSS'}/>
                    <Skill img={imgReact} title={'React'}/>
                </div>
            </div>
        </div>
    )
}
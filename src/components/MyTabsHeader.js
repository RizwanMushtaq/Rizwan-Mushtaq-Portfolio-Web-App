import React from 'react'
import styles from './css_modules/MyTabsHeader.module.scss'

export default function MyTabsHeader(props) {

    return (
        <div className={styles.myTabsHeader}>
            <button className={styles.myTabsButton} onClick={props.portfolioHandler} >My Portfolio</button>
            {/* <button className={styles.myTabsButton} onClick={props.aboutMeHandler}>About Me</button>
            <button className={styles.myTabsButton} onClick={props.contactHandler}>Contact</button> */}
        </div>
    )
}

import React from 'react'
import styles from './css_modules/MyTabsHeader.module.css'

export default function MyTabsHeader() {
    return (
        <div className={styles.myTabsHeader}>
            <button className={styles.myTabsButton}>Portfolio</button>
            <button className={styles.myTabsButton}>About Me</button>
            <button className={styles.myTabsButton}>Contact</button>
        </div>
    )
}

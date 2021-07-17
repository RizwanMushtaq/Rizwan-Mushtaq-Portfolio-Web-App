import React from 'react'
import styles from './css_modules/MyIdDiv.module.scss'


export default function MyIdDiv(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}


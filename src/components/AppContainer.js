import React from 'react'

import styles from './css_modules/AppContainer.module.scss'


export default function AppContainer(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

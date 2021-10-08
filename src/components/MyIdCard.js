import React from 'react'
import styles from './css_modules/MyIdCard.module.scss'

import myPic from '../images/my-pic.png'
import myCV from '../images/CV_Rizwan.pdf'

export default function MyIdCard() {
    return (
        <div className={styles.container}>
            <div className={styles.avatarDiv}>
                <div className={styles.avatarFrame}>
                    <img src={myPic} alt='avatar' className={styles.avatar}></img>
                </div>
            </div>
            <div className={styles.name}>
                <p>Rizwan Mushtaq</p>
            </div>
            <div className={styles.profession}>
                <p>Front End Web-Developer</p>
                <p>Sass JavaScript React.JS</p>
                <p>Node.JS PHP MongoDB MySQL</p>
            </div>
            <div className={styles.bio}>
                <p>Passionate to Develop a Product</p>
            </div>
            
            <button className={styles.cvButton} onClick = {() => window.open(myCV)}>CV</button>
        </div>
    )
}

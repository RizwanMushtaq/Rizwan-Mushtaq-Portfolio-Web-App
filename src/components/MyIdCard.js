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
                <h2>Rizwan Mushtaq</h2>
            </div>
            <div className={styles.profession}>
                <h3>Full Stack Web Developer</h3>
                <h4>Sass JavaScript React.JS</h4>
                <h4>Node.JS PHP MongoDB MySQL</h4>
            </div>
            <div className={styles.bio}>
                <h4>Passionate to Develop a Product</h4>
            </div>
            
            <button className={styles.cvButton} onClick = {() => window.open(myCV)}>CV</button>
        </div>
    )
}

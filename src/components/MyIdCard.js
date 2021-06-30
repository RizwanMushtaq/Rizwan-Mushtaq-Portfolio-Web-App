import React from 'react'
import styles from './css_modules/MyIdCard.module.css'

import myPic from '../images/my-pic.png'


const useStyle = {
    backgroundColor: 'lightGreen',
    color: 'black',
    width: '100%',
    maxHeight: '400px',
    marginRight: 8,
    marginLeft: 8,
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
}
const button = {
    width: '200px',
    height: '32px',
}

export default function MyIdCard() {
    return (
        <div style={useStyle}>
            <div className={styles.avatarDiv}>
                <div className={styles.avatarFrame}>
                    <img src={myPic} alt='avatar' className={styles.avatar}></img>
                </div>
            </div>
            <h2>Rizwan Mushtaq</h2>
            <h3>Front End Web Developer</h3>
            <h4>Passionate about Coding</h4>
            <button style={button}>CV</button>
        </div>
    )
}

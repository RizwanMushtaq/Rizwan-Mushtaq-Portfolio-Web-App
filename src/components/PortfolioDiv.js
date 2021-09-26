import React from 'react'
import styles from './css_modules/PortfolioDiv.module.scss'

import arrowlogo from '../images/arrowSymbol.svg'

import PrintMyTweetAppProjectImage from '../images/PrintMyTweetApp/PrintMyTweetAppImage.png'
import PrintMyTweetApp914 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-914.png'
import PrintMyTweetApp814 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-814.png'
import PrintMyTweetApp714 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-714.png'
import PrintMyTweetApp614 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-614.png'
// import PrintMyTweetApp514 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-514.png'
import PrintMyTweetApp664 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-664.png'
import PrintMyTweetApp564 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-564.png'
// import PrintMyTweetApp464 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-464.png'
import PrintMyTweetApp364 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-364.png'

//Do IT Now App - PHP Images
import DoItNowAppPHPImage from '../images/DoItNowApp_PHP/doitnow_php_1006-255.png'

export default function PortfolioDiv() {

    const handleDescriptionVisibility = (e) => {
        console.log(e.target.parentElement.parentElement.nextElementSibling)
        if(e.target.parentElement.parentElement.nextElementSibling.style.display === 'flex'){
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'none'
            e.target.classList.remove(styles.arrowUp)
            e.target.classList.add(styles.arrowDown)
            
        }else{
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'flex'
            e.target.classList.remove(styles.arrowDown)
            e.target.classList.add(styles.arrowUp)
        }

        console.log(e.target.className)
    }


    return (
        <div>
            {/* 1st Project ********************************************** */}
            <div className={styles.projectContainer}>
                <div className={styles.projectHeading}>
                    Print My Tweet App
                </div>
                <div className={styles.imageContainer}>
                    <picture>
                        {/* <img src={PrintMyTweetAppProjectImage} alt="project img" /> */}
                        <source media="(min-width: 1280px)" srcSet={PrintMyTweetAppProjectImage} />
                        <source media="(min-width: 1180px)" srcSet={PrintMyTweetAppProjectImage} />
                        <source media="(min-width: 1080px)" srcSet={PrintMyTweetApp914} />
                        <source media="(min-width: 980px)" srcSet={PrintMyTweetApp814} />
                        <source media="(min-width: 880px)" srcSet={PrintMyTweetApp714} />
                        <source media="(min-width: 780px)" srcSet={PrintMyTweetApp614} />

                        <source media="(min-width: 768px)" srcSet={PrintMyTweetApp614} />
                        
                        <source media="(min-width: 680px)" srcSet={PrintMyTweetApp814} />
                        <source media="(min-width: 580px)" srcSet={PrintMyTweetApp664} />
                        <source media="(min-width: 480px)" srcSet={PrintMyTweetApp564} />
                        <source media="(min-width: 380px)" srcSet={PrintMyTweetApp364} />
                        <img src={PrintMyTweetApp364} alt="project img" />
                    </picture>
                    
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={() => window.open('https://rizwanmushtaq.github.io/PrintMyTweet/')}>Live Demo</button>
                    
                    <div className={styles.arrowLogoContainer}>
                        <img src={arrowlogo} alt="arrow symbol" onClick={handleDescriptionVisibility} className={styles.arrowDown}></img>
                    </div>
                    
                    <button onClick={() => window.open('https://github.com/RizwanMushtaq/PrintMyTweet/tree/main')}> Code </button>
                </div>
                
                <div className={styles.projectDescription}>
                    <div>Web Application Features</div>
                    <div className={styles.projectDescriptionDetails}>
                        <ul>
                            <li>Generate Image of any Size</li>
                            <li>Writing Text in Image</li>
                            <li>Change Colors of Text and background of Image</li>
                            <li>Insert random Circles in the background</li>  
                            <li>Position your text in Image</li>
                            <li>Insert Tweeter icon and Position anywhere inside Image</li>
                            <li>Export Images as PNG or JPEG formats</li>
                        </ul>
                    </div>
                </div>

            </div>
            {/* 2nd Project ********************************************** */}
            <div className={styles.projectContainer}>
                <div className={styles.projectHeading}>
                    Do It Now App (MySQL_PHP_JavaScript_CSS_HTML)
                </div>
                <div className={styles.imageContainer}>
                    <img src={DoItNowAppPHPImage} alt="project img"></img>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={() => window.open('https://doitnow-mysql-php-js-css-herok.herokuapp.com/')}>Live Demo</button>
                    <div className={styles.arrowLogoContainer}>
                        <img src={arrowlogo} alt="arrow symbol" onClick={handleDescriptionVisibility} className={styles.arrowDown}></img>
                    </div>
                    <button onClick={() => window.open('https://github.com/RizwanMushtaq/doitnow_mysql_php_js_css_heroku')}> Code </button>
                </div>
                
                <div className={styles.projectDescription}>
                    Prject Description
                </div>

            </div>
            {/* 3rd Project ********************************************** */}
            {/* <div className={styles.projectContainer}>
                <div className={styles.projectHeading}>
                    3rd Project
                </div>
                <div className={styles.imageContainer}>
                    <img alt="project img"></img>
                </div>
                <div className={styles.buttonContainer}>
                    <button>Live Demo</button>
                    <div className={styles.arrowLogoContainer}>
                        <img src={arrowlogo} alt="arrow symbol" onClick={handleDescriptionVisibility} className={styles.arrowDown}></img>
                    </div>
                    <button> Code </button>
                </div>
                
                <div className={styles.projectDescription}>
                    Prject Description
                </div>

            </div> */}

        </div>
    )
}


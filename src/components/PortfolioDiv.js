import React from 'react'
import styles from './css_modules/PortfolioDiv.module.scss'

import arrowlogo from '../images/arrowSymbol.svg'

//Do It Now App - React.JS 



//Print My Tweet App Images
import PrintMyTweetAppProjectImage from '../images/PrintMyTweetApp/PrintMyTweetAppImage.png'
import PrintMyTweetApp914 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-914.png'
import PrintMyTweetApp814 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-814.png'
import PrintMyTweetApp714 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-714.png'
import PrintMyTweetApp614 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-614.png'
import PrintMyTweetApp664 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-664.png'
import PrintMyTweetApp564 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-564.png'
import PrintMyTweetApp364 from '../images/PrintMyTweetApp/PrintMyTweetAppImage-364.png'

//Do IT Now App - Java Script & PHP Images
import DoItNowAppPHPImage from '../images/DoItNowApp_PHP/doitnow_php_1006-255.png'
import DoItNowAppPHPImage914 from '../images/DoItNowApp_PHP/doitnow_php_914-255.png'
import DoItNowAppPHPImage814 from '../images/DoItNowApp_PHP/doitnow_php_814-255.png'
import DoItNowAppPHPImage714 from '../images/DoItNowApp_PHP/doitnow_php_714-255.png'
import DoItNowAppPHPImage614 from '../images/DoItNowApp_PHP/doitnow_php_614-255.png'
import DoItNowAppPHPImage664 from '../images/DoItNowApp_PHP/doitnow_php_664-255.png'
import DoItNowAppPHPImage564 from '../images/DoItNowApp_PHP/doitnow_php_564-255.png'
import DoItNowAppPHPImage364 from '../images/DoItNowApp_PHP/doitnow_php_364-255.png'

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
                    Do It Now App (React.JS)
                </div>
                <div className={styles.imageContainer}>
                    <picture>
                        <source media="(min-width: 1280px)" srcSet={DoItNowAppPHPImage} />
                        <source media="(min-width: 1180px)" srcSet={DoItNowAppPHPImage} />
                        <source media="(min-width: 1080px)" srcSet={DoItNowAppPHPImage914} />
                        <source media="(min-width: 980px)" srcSet={DoItNowAppPHPImage814} />
                        <source media="(min-width: 880px)" srcSet={DoItNowAppPHPImage714} />
                        <source media="(min-width: 780px)" srcSet={DoItNowAppPHPImage614} />

                        <source media="(min-width: 768px)" srcSet={DoItNowAppPHPImage614} />
                        
                        <source media="(min-width: 680px)" srcSet={DoItNowAppPHPImage614} />
                        <source media="(min-width: 580px)" srcSet={DoItNowAppPHPImage664} />
                        <source media="(min-width: 480px)" srcSet={DoItNowAppPHPImage564} />
                        <source media="(min-width: 380px)" srcSet={DoItNowAppPHPImage364} />
                        <img src={DoItNowAppPHPImage364} alt="project img" />
                    </picture>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={() => window.open('https://doitnow-reactjs-sass.netlify.app/')}>Live Demo</button>
                    <div className={styles.arrowLogoContainer}>
                        <img src={arrowlogo} alt="arrow symbol" onClick={handleDescriptionVisibility} className={styles.arrowDown}></img>
                    </div>
                    <button onClick={() => window.open('https://github.com/RizwanMushtaq/doitnow_reactjs_sass')}> Code </button>
                </div>
                
                <div className={styles.projectDescription}>
                    <div>Technologies Used</div>
                    <div className={styles.projectDescriptionDetails}>
                        <ul>
                            <li>React.js</li>
                            <li>Sass</li>
                            <li>JSON Web Token</li>
                            <li>date-fns - Modern JavaScript date utility library</li>
                        </ul>
                    </div>
                    <div>Application Features</div>
                    <div className={styles.projectDescriptionDetails}>
                        <ul>
                            <li>Registration of user is done and user data is saved in backend</li>
                            <li>User login functionality is added</li>
                            <li>User authorization is done using JWTs</li>
                            <li>User can see calender View and each day with todo items is makred with icon</li>
                            <li>User can add ToDo items for each day selected in calender</li>  
                            <li>User can set the ToDo item to done or undone state</li>
                            <li>User can delete ToDo item from list</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 2nd Project ********************************************** */}
            <div className={styles.projectContainer}>
                <div className={styles.projectHeading}>
                    Do It Now App (RestFul API)
                </div>
                <div className={styles.imageContainer}>
                    <picture>
                        <source media="(min-width: 1280px)" srcSet={DoItNowAppPHPImage} />
                        <source media="(min-width: 1180px)" srcSet={DoItNowAppPHPImage} />
                        <source media="(min-width: 1080px)" srcSet={DoItNowAppPHPImage914} />
                        <source media="(min-width: 980px)" srcSet={DoItNowAppPHPImage814} />
                        <source media="(min-width: 880px)" srcSet={DoItNowAppPHPImage714} />
                        <source media="(min-width: 780px)" srcSet={DoItNowAppPHPImage614} />

                        <source media="(min-width: 768px)" srcSet={DoItNowAppPHPImage614} />
                        
                        <source media="(min-width: 680px)" srcSet={DoItNowAppPHPImage614} />
                        <source media="(min-width: 580px)" srcSet={DoItNowAppPHPImage664} />
                        <source media="(min-width: 480px)" srcSet={DoItNowAppPHPImage564} />
                        <source media="(min-width: 380px)" srcSet={DoItNowAppPHPImage364} />
                        <img src={DoItNowAppPHPImage364} alt="project img" />
                    </picture>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={() => window.open('https://doitnow-mysql-php-js-css-herok.herokuapp.com/')}>Live Demo</button>
                    <div className={styles.arrowLogoContainer}>
                        <img src={arrowlogo} alt="arrow symbol" onClick={handleDescriptionVisibility} className={styles.arrowDown}></img>
                    </div>
                    <button onClick={() => window.open('https://github.com/RizwanMushtaq/doitnow_mysql_php_js_css_heroku')}> Code </button>
                </div>
                
                <div className={styles.projectDescription}>
                    <div>Technologies Used</div>
                    <div className={styles.projectDescriptionDetails}>
                        <ul>
                            <li>RESTFUL API</li>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>MySQL</li>
                                </ul>
                        </ul>
                    </div>
                    <div>Application Features</div>
                    <div className={styles.projectDescriptionDetails}>
                        <ul>
                            <li>Registration of user is done and user data is saved in backend</li>
                            <li>User login functionality is added</li>
                            <li>User can add ToDo items in list</li>
                            <li>User can add ToDo items in folder to organize ToDo list</li>  
                            <li>User can see ToDo list based to date selected in Dialog</li>
                            <li>User can see Weekly ToDo list in Dialog</li>
                            <li>User can delete ToDo item from list</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 3rd Project ********************************************** */}
            <div className={styles.projectContainer}>
                <div className={styles.projectHeading}>
                    Print My Tweet App (Vanilla JavaScript)
                </div>
                <div className={styles.imageContainer}>
                    <picture>
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
                    <div>Technologies Used</div>
                    <div className={styles.projectDescriptionDetails}>
                        <ul>
                            <li>Canvas API</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div>Application Features</div>
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

            {/* 4th Project ********************************************** */}
            <div className={styles.projectContainer}>
                <div className={styles.projectHeading}>
                    Do It Now App (Vanilla JavaScript & PHP)
                </div>
                <div className={styles.imageContainer}>
                    <picture>
                        <source media="(min-width: 1280px)" srcSet={DoItNowAppPHPImage} />
                        <source media="(min-width: 1180px)" srcSet={DoItNowAppPHPImage} />
                        <source media="(min-width: 1080px)" srcSet={DoItNowAppPHPImage914} />
                        <source media="(min-width: 980px)" srcSet={DoItNowAppPHPImage814} />
                        <source media="(min-width: 880px)" srcSet={DoItNowAppPHPImage714} />
                        <source media="(min-width: 780px)" srcSet={DoItNowAppPHPImage614} />

                        <source media="(min-width: 768px)" srcSet={DoItNowAppPHPImage614} />
                        
                        <source media="(min-width: 680px)" srcSet={DoItNowAppPHPImage614} />
                        <source media="(min-width: 580px)" srcSet={DoItNowAppPHPImage664} />
                        <source media="(min-width: 480px)" srcSet={DoItNowAppPHPImage564} />
                        <source media="(min-width: 380px)" srcSet={DoItNowAppPHPImage364} />
                        <img src={DoItNowAppPHPImage364} alt="project img" />
                    </picture>
                </div>
                <div className={styles.buttonContainer}>
                    <button onClick={() => window.open('https://doitnow-mysql-php-js-css-herok.herokuapp.com/')}>Live Demo</button>
                    <div className={styles.arrowLogoContainer}>
                        <img src={arrowlogo} alt="arrow symbol" onClick={handleDescriptionVisibility} className={styles.arrowDown}></img>
                    </div>
                    <button onClick={() => window.open('https://github.com/RizwanMushtaq/doitnow_mysql_php_js_css_heroku')}> Code </button>
                </div>
                
                <div className={styles.projectDescription}>
                    <div>Technologies Used</div>
                    <div className={styles.projectDescriptionDetails}>
                        <ul>
                            <li>Front-End Development</li>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                </ul>
                            <li>Back-End Development</li>
                                <ul>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                </ul>
                        </ul>
                    </div>
                    <div>Application Features</div>
                    <div className={styles.projectDescriptionDetails}>
                        <ul>
                            <li>Registration of user is done and user data is saved in backend</li>
                            <li>User login functionality is added</li>
                            <li>User can add ToDo items in list</li>
                            <li>User can add ToDo items in folder to organize ToDo list</li>  
                            <li>User can see ToDo list based to date selected in Dialog</li>
                            <li>User can see Weekly ToDo list in Dialog</li>
                            <li>User can delete ToDo item from list</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


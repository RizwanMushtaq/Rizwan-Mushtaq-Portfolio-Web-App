import React, {useState} from 'react'
import MyTabsHeader from './MyTabsHeader'
import PortfolioDiv from './PortfolioDiv'
import AboutMeDiv from './AboutMeDiv'
import ContactDiv from './ContactDiv'

import styles from './css_modules/MyTabsDiv.module.scss'


export default function MyTabs() {

    const [pageState, setPageState] = useState('portfolio')

    function setPortfolioPage(){
        console.log('Portfolio Button clicked - message from parent')
        setPageState('portfolio')
    }
    function setAboutMePage(){
        console.log('AboutMe Button clicked - message from parent')
        setPageState('aboutMe')
    }
    function setContactPage(){
        console.log('Contact Button clicked - message from parent')
        setPageState('contact')
    }

    let portfolioPage = ''
    if (pageState === 'portfolio') {
        portfolioPage = <PortfolioDiv />
    }else if (pageState === 'aboutMe') {
        portfolioPage = <AboutMeDiv />
    }else if (pageState === 'contact') {
        portfolioPage = <ContactDiv />
    }
    return (
        <div className={styles.myTabsDiv}>
            <MyTabsHeader 
                portfolioHandler = {setPortfolioPage} 
                aboutMeHandler = {setAboutMePage} 
                contactHandler = {setContactPage}
            />
            {portfolioPage}
        </div>
    )
}


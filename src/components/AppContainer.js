import React from 'react'
import { useMediaPredicate } from 'react-media-hook'
import MyIdDiv from './MyIdDiv'
import MyTabsDiv from './MyTabsDiv'

// import styles from './css_modules/AppContainer.module.css'


const useStyle = {
    backgroundColor: '#cfe8fc',
    maxWidth: 1280,
    height: '100vh',
    margin: 'auto',
    display: 'flex',
}

export default function AppContainer() {

    const biggerThan768 = useMediaPredicate("(min-width: 768px)")

    return (
        <div style={useStyle}>
            { biggerThan768 && <MyIdDiv />}
            <MyTabsDiv/>
        </div>
    )
}


import React from 'react'
import MyIdDiv from './MyIdDiv'
import MyTabsDiv from './MyTabsDiv'

const useStyle = {
    backgroundColor: '#cfe8fc',
    maxWidth: 1280,
    height: '100vh',
    margin: 'auto',
    display: 'flex',
}


export default function AppContainer() {
    return (
        <div style={useStyle}>
            <MyIdDiv/>
            <MyTabsDiv/>
        </div>
    )
}


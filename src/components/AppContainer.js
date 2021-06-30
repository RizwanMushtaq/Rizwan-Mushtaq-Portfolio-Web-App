import React from 'react'
import MyId from './MyId'
import MyTabs from './MyTabs'

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
            <MyId/>
            <MyTabs/>
        </div>
    )
}


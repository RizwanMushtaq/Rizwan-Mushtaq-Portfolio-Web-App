import React from 'react'
import MyTabsHeader from './MyTabsHeader'

const useStyle = {
    backgroundColor: '#cfe8fc',
    color: 'black',
    flexGrow: '1',
    display: 'flex',
}

export default function MyTabs() {
    return (
        <div style={useStyle}>
            <MyTabsHeader />
        </div>
    )
}


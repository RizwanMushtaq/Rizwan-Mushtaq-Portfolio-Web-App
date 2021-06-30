import React from 'react'
import MyIdCard from './MyIdCard'

const useStyle = {
    backgroundColor: '#cfe8fc',
    color: 'black',
    flex: '0 0 250px',
    display: 'flex',
}

export default function MyIdDiv() {
    return (
        <div style={useStyle}>
            <MyIdCard></MyIdCard>
        </div>
    )
}


import React from 'react'
import MyIdCard from './MyIdCard'

const useStyle = {
    backgroundColor: '#ffeedd',
    color: 'black',
    flex: '0 0 250px',
    marginRight: 16,
    display: 'flex',
}

export default function MyId() {
    return (
        <div style={useStyle}>
            <MyIdCard></MyIdCard>
        </div>
    )
}


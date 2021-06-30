import React from 'react'

const useStyle = {
    backgroundColor: 'lightGreen',
    color: 'black',
    width: '100%',
    maxHeight: '400px',
    textAlign: 'center',
}
const button = {
    width: '200px',
    height: '32px',
}

export default function MyIdCard() {
    return (
        <div style={useStyle}>
            <div>
                <img src='' alt='avatar' style={{width:'100%'}}></img>
            </div>
            <h2>Rizwan Mushtaq</h2>
            <h3>Front End Web Developer</h3>
            <h4>Passionate about Coding</h4>
            <button style={button}>CV</button>
        </div>
    )
}

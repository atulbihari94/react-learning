import React from 'react';
const helloWorld = () => {
    const pStyle = {};
    pStyle.color = "red";
    return (
        <div>
            <p style={{ "color": "green" }}>Hi, I am Atul Bihari</p>
            <p style={{ "color": "blue" }}>Start Learning React JS from Scratch</p>
            <h3 style={pStyle}>Hello World</h3>
        </div>);
}

export default helloWorld;

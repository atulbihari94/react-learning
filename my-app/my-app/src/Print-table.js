import React from 'react';
const helloWorld = (props) => {
    const fromOneToTen = [1,2,3,4,5,6,7,8,9,10].map( element => {
        return <p>{props.table} * {element} = {props.table * element}</p>
    });
    return <div>{props.title } {props.table} {fromOneToTen} </div>
}

export default helloWorld ;
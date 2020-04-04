import React from 'react';
import './Person.css'

const person = (props) => {
return (
    <div className="person">
        <p className="mt" onClick={props.click}>Hello I am {props.name} Component, and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
)
}

export default person;
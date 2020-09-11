import React, { Component } from 'react';
import personCSS from './Person.module.css';

const person = param => {


    return (
        <div className={personCSS.Person}>

            <p onClick={param.click}>I'm {param.name}! and I am {param.age} years old!</p>
            <p>{param.children}</p>
            <input type="text" onChange={param.changed} value={param.name}/>
        </div>

    );
};

export default person;
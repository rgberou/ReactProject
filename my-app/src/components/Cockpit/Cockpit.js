import React from 'react';
import appCss from '../Cockpit/Cockpit.module.css';

const cockpit =(props)=>{

    let classes = [];
    let btnClass='';
    if (props.showPersons){
        console.log("testing");
        btnClass=appCss.Red;

        console.log(btnClass);
    }   

    if(props.persons.length <= 2){

      classes.push(appCss.red);
    }

    if (props.persons.length <= 1){

      classes.push(appCss.bold);

    }

    return(
        <div className={appCss.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is now really working!</p>
            <button className={btnClass} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>

    );

}

export default cockpit;
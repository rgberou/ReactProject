import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px;
    padding: 16px;
    text-align: center;
        
    '@media (min-width: 500px)':{
        width: '450px'
    }

`;





const person = (param) => {

    // const style={
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // }
    return (
        // <div className="Person">
        <StyledDiv>
            <p onClick={param.click}>I'm {param.name}! and I am {param.age} years old!</p>
            <p>{param.children}</p>
            <input type="text" onChange={param.changed} value={param.name}/>
        </StyledDiv>

    );
};

export default person;
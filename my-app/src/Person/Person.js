import React from 'react';

const person = (param) => {
    return (
        <div>
            <p>I'm {param.name}! and I am {param.age} years old!</p>
            <p>{param.children}</p>
        </div>

    );
};

export default person;
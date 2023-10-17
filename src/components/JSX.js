import React from 'react';

const x = (props) =>
{
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <a href='#'>This is a link for {props.name}</a>
            {props.children}
        </div>
    );
}

export default x;
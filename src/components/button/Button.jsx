import React from 'react';

const Button = ({clicked, children, btnClass}) => {
    return (
        <div>
            <button onClick={ clicked } className={btnClass} >{ children}</button>
        </div>
    )
}

export default Button

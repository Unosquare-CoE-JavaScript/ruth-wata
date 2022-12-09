import React from 'react';

import classes from './Button.module.css';

export default function Button ({ children, onClick, type }){
    return (
        <button
        className={classes.button}
        type={type || 'button'}
        onClick={onClick}
        >
        {children}
        </button>
    );

}
 



import React from 'react';
import './topButton.css';

function topButton() {
    return(
        <a href='#about'>
        <div className='topButton'>
            <i className="fa fa-caret-up"></i>
        </div>
        </a>
    ); 
};

export default topButton;
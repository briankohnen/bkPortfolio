import React from 'react';
import './style.css';

function Head(props) {

    return (
        <div className='headWrapper'>
        <div className='head'>
            <p className='topHeader'>{props.topHeader}</p>
            <p className='contactHeader'>{props.contactHeader}</p>
            <p className='botHeader'>{props.botHeader}</p>
        </div>
        </div>
    );

};

export default Head;
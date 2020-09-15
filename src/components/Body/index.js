import React, { Component } from 'react';
import Head from '../Head';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import './style.css';

class Body extends Component {
    
    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = './intersection.js';
        document.body.appendChild(script);
    }
    render() {
    return (
        <div className='appWrapper' id='about'>
        <Head topHeader={'Brian A. Kohnen'} botHeader={"Full Stack Web Developer based in Chicago, IL"} />
        <div className='about big3' data='About'>
            <p>
            Focused on creating feature rich and refined user-friendly web applications.
            </p>
            <p>
            I have experience in coding responsive web applications from start-to-finish using MERN (MongoDB, Express, React, Node) stack JavaScript development.
            </p>
            <p>
            I'm more skilled with back-end work, creating APIs and optimizing databases, but I love doing and learning every side of web developing.
            </p>
            <p>Get in touch with me <a href="#contact"><span className='contacto un'>here</span></a>.</p>
            <div className='linkers'>
                <a href='#portfolio'>
                    <div className='aboutLinkToPortfolio'>
                        <span className='un'>Check out my work below</span>
                    </div>
                </a>
            </div>
        </div>
        <Portfolio />
        <Contact />
        </div>
    );
    }

};

export default Body;
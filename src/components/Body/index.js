import React, { Component } from 'react';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import TopButton from '../topButton';
import './style.css';

class Body extends Component {
    
    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = './intersection.js';
        document.body.appendChild(script);
    };
    render() {
    return (
        <>
        <TopButton />
        <main className='appWrapper' id='about'>
        <section className='about big3' data='About'>
            <article className='introduction'>
                <h1>Brian Kohnen</h1>
                <h3>a web developer based in Chicago, IL</h3>
                <p>
                I like building refined, user-friendly web applications and trying to create unique and interesting website designs.
                </p>
                <p>I'm usually working with these technologies:
                    <ul>
                        <li><code>JavaScript</code></li>
                        <li><code>Express</code></li>
                        <li><code>React</code></li>
                        <li><code>Node.js</code></li>
                    </ul>
                </p>
                {/* <p>Get in touch with me <a href="#contact"><span className='contacto un'>here</span></a>.</p> */}
                {/* <div className='aboutLinkToPortfolio'>
                    <a href='#portfolio'>
                        <span className='un'>Check out my work below</span>
                    </a>
                </div> */}

            </article>

        </section>
        <Portfolio />
        <Contact />
        </main>
        </>
    );
    }

};

export default Body;
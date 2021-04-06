import React from 'react';
import '../App.css';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Home = (props) => {
    return (
        <>
        <section className='home'>
            {
            props.animation === 'about' ?
            <About animation={props.animation} />
            :
            props.animation === 'portfolio' ?
            <Portfolio animation={props.animation} />
            :
            props.animation === 'contact' ?
            <Contact animation={props.animation} />
            :
            <article>
                <h1>brian kohnen</h1>
                <h3>web developer based in Chicago, IL</h3>
            </article>
            }
        </section>
        </>
    );
};

export default Home;
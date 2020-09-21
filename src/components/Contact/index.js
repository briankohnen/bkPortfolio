import React from 'react';
import Head from '../Head';
import './style.css';

function Contact() {

    return (
        <div id='contact' className='big3' data='Contact'>
        <Head contactHeader={"Let's work together"} />
        <section className="contact">

            <p>Right now I am looking to fill a front-end role on a development team and I'm also interested in collaborating on projects.</p>
            <p>I'm currently working on projects to bolster my skills, but I'm free to talk anytime of the day. Reach out to me on any of these platforms!</p>
            <div className='contactButtons'>
                <a href="mailto:kohnenbrian@gmail.com" target="_blank" rel='noopener noreferrer' className="fa fa-envelope faObs" title="e-mail" alt='email'></a>
                <a href="https://github.com/briankohnen" target="_blank" rel='noopener noreferrer' className="fa fa-github faObs" title="github" alt='github'></a>
                <a href="https://www.linkedin.com/in/brian-kohnen-b05025187/" target="_blank" rel='noopener noreferrer' className="fa fa-linkedin faObs" title="linkedIn" alt='linkedin'></a>
            </div>
            <div className='buttonDesc'>
                <p>kohnenbrian@gmail.com</p>
                <p><a href="tel:1-773-370-1013" className="phNum">+1(773)370-1013</a></p>
            </div>

            <a href='https://drive.google.com/file/d/11sO7DVSUt2nm8myQ7cz1llRYJ6wc1yOM/view?usp=sharing' target="_blank" rel='noopener noreferrer' alt='resume'><div className='resumeButton'>View my resume</div></a>
        </section>
        </div>
    );

};

export default Contact;
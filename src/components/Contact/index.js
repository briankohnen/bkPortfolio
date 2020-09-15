import React from 'react';
import Head from '../Head';
import './style.css';

function Contact() {

    return (
        <div id='contact' className='big3' data='Contact'>
        <Head contactHeader={"Let's work together"} />
        <section className="contact">

            <p>Right now I am looking to fill a full-stack or back-end role on a development team and I'm also interested in collaborating on projects.</p>
            <p>At my current job, my hours are variable but I'm usually free during the daytime. Reach out to me on any of these platforms!</p>
            <div className='contactButtons'>
                <a href="mailto:kohnenbrian@gmail.com" target="_blank" className="fa fa-envelope faObs" title="e-mail"></a>
                <a href="https://github.com/briankohnen" target="_blank" className="fa fa-github faObs" title="github"></a>
                <a href="https://www.linkedin.com/in/brian-kohnen-b05025187/" target="_blank" className="fa fa-linkedin faObs" title="linkedIn"></a>
            </div>
            <div className='buttonDesc'>
                <p>kohnenbrian@gmail.com</p>
                <p><a href="tel:1-773-370-1013" className="phNum">+1(773)370-1013</a></p>
            </div>

            <div className='resumeButton'>View my resume</div>
        </section>
        </div>
    );

};

export default Contact;
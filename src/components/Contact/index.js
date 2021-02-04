import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
    state = {
        x: 0,
        y: 0
    };

    mouseCoord = (e) => {
        this.setState({ x: e.screenX, y: e.screenY});
    };

    render() {
    return (
        <div id='contact' className='big3' data='Contact' onMouseMove={this.mouseCoord} >
            <section className="contact">
                <h1>Let's work together<span>.</span></h1>

                <div className='closingP'>
                    <p>Right now I am looking to fill a front-end role on a development team and I'm also interested in collaborating on projects of any size.</p>
                    <p>You can reach me through any of these platforms!</p>
                    <p>
                        <a href="mailto:kohnenbrian@gmail.com" rel='noopener noreferrer' className='phNum'>kohnenbrian@gmail.com</a>
                    </p>
                </div>
                
                    <div className='contactButtons'>
                        <a href="mailto:kohnenbrian@gmail.com" rel='noopener noreferrer' className="fa fa-envelope faObs" title="e-mail" alt='email'></a>
                        <a href="https://github.com/briankohnen" target="_blank" rel='noopener noreferrer' className="fa fa-github faObs" title="github" alt='github'></a>
                        <a href="https://www.linkedin.com/in/brian-kohnen-b05025187/" target="_blank" rel='noopener noreferrer' className="fa fa-linkedin faObs" title="linkedIn" alt='linkedin'></a>
                    </div>

                    <div className='formHolder'>
                        <form>
                            <input type='text' id='name' name='name' placeholder='name'></input>
                            <input type='text' id='compName' name='compName' placeholder='company name'></input>
                            <input type='text' id='email' name='email' placeholder='e-mail'></input>
                            <input type='text' id='feeling' name='feeling' placeholder="how's your day?"></input>
                            <textarea type='text' id='message' name='message' placeholder='what are you thinking?'></textarea>
                        </form>
                        <div className='submitBtn'>submit</div>
                    </div>

                    <a href='https://drive.google.com/file/d/11sO7DVSUt2nm8myQ7cz1llRYJ6wc1yOM/view?usp=sharing' target="_blank" rel='noopener noreferrer' alt='resume' className='resume'><div className='resumeButton'>View my resume</div></a>
                    
                    <div className='cubeC'>
                        <div className='animC'></div>
                        <div className='animC'></div>
                        <div className='animC'></div>
                        <div className='animC'></div>
                        <div className='animC'></div>
                        <div className='animC'></div>
                    </div>
            </section>
        </div>
    );
    };

};

export default Contact;
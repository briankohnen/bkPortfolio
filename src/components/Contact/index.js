import React, { Component } from 'react';
import './style.css';
import Axios from 'axios';

class Contact extends Component {
    state = {
        x: 0,
        y: 0,
        formLoading: false
    };

    mouseCoord = (e) => {
        this.setState({ x: e.screenX, y: e.screenY});
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {

        let regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

        if(!this.state.name) {
            this.setState({nameErr: 'enter your name!'});
        }

        if(!this.state.message) {
            this.setState({messageErr: "feelin' nervous ??"});
        }

        if(!this.state.email || !regex.test(this.state.email)) {
            this.setState({email: '', emailErr: 'enter a valid email >:{}'});
        }

        if ((this.state.email && this.state.name && this.state.message)) {

            let regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

            if(!regex.test(this.state.email)) {
                this.setState({email: '', emailErr: 'enter a valid email >:{}'});
            } else {

                this.setState({formLoading: true});

                const data = { 
                    email: this.state.email,
                    name: this.state.name,
                    compName: this.state.compName,
                    feeling: this.state.feeling,
                    message: this.state.message
                };

                Axios.post('https://us-central1-bkportfolio-5ed46.cloudfunctions.net/submit', data).then(res => {
                    console.log(res);
                    this.setState({formLoading: 'done'});
                }).catch(err => {
                    console.log(err);
                });
            }
        }

    };

    render() {
    return (
        <div id='contact' className='big3' data='Contact' onMouseMove={this.mouseCoord} >
            <section className="contact">
                <div className='topSec'>
                <h1>Let's work together<span>.</span></h1>
                <div className={`formHolder ${this.state.formLoading === false ? '' : this.state.formLoading === 'done' ? 'done' : 'loading'}`}>
                        <form className={this.state.formLoading === false ? '' : 'hideform'}>
                            <input className={this.state.nameErr ? 'errorRed' : ''} type='text' name='name' placeholder={this.state.nameErr ? this.state.nameErr : 'name'} value={this.state.name} onChange={this.handleInputChange} onClick={()=>this.setState({nameErr: false})}></input>
                            <input type='text' name='compName' placeholder='company name' value={this.state.compName} onChange={this.handleInputChange}></input>
                            <input className={this.state.emailErr ? 'errorRed' : ''} type='text' name='email' placeholder={this.state.emailErr ? this.state.emailErr : 'email'} value={this.state.email} onChange={this.handleInputChange} onClick={()=>this.setState({emailErr: false})}></input>
                            <input type='text' name='feeling' placeholder="how's your day?" value={this.state.feeling} onChange={this.handleInputChange}></input>
                            <textarea className={this.state.messageErr ? 'errorRed' : ''} type='text' name='message' placeholder={this.state.messageErr ? this.state.messageErr : 'what are you thinking?'} value={this.state.message} onChange={this.handleInputChange} onClick={()=>this.setState({messageErr: false})}></textarea>
                        </form>
                        <div className={`submitBtn ${this.state.formLoading === false ? '' : 'hideform'}`} onClick={()=>this.handleSubmit()}>submit</div>
                    </div>
                </div>

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
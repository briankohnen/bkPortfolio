import React, { Component } from 'react';
import './contact.css';
import Axios from 'axios';

class Contact extends Component {
    state = {
        formLoading: false
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
                    this.setState({formLoading: 'done'});
                }).catch(err => {
                    console.log(err);
                });
            }
        }

    };

    render() {
    return (
            <section className="contact">

                <div className='topSec'>
                    <div className='formHead'>
                        <h1>Let's work together<span>.</span></h1>
                        <div className={`formHolder ${this.state.formLoading === false ? '' : this.state.formLoading === 'done' ? 'done' : 'loading'}`}>
                                <form className={this.state.formLoading === false ? '' : 'hideform'}>
                                    <input className={this.state.nameErr ? 'errorRed' : ''} type='text' name='name' placeholder={this.state.nameErr ? this.state.nameErr : 'name'} value={this.state.name} onChange={this.handleInputChange} onClick={()=>this.setState({nameErr: false})}></input>
                                    <input className={this.state.emailErr ? 'errorRed' : ''} type='text' name='email' placeholder={this.state.emailErr ? this.state.emailErr : 'email'} value={this.state.email} onChange={this.handleInputChange} onClick={()=>this.setState({emailErr: false})}></input>
                                    <textarea className={this.state.messageErr ? 'errorRed' : ''} type='text' name='message' placeholder={this.state.messageErr ? this.state.messageErr : 'what are you thinking?'} value={this.state.message} onChange={this.handleInputChange} onClick={()=>this.setState({messageErr: false})}></textarea>
                                </form>
                                <div className={`submitBtn ${this.state.formLoading === false ? '' : 'hideform'}`} onClick={()=>this.handleSubmit()}>submit</div>
                        </div>
                    </div>
                    <div>
                        <p>I'm probably working on a few projects for a number of clients, but I'm always available to talk.
                            <br></br>
                            Looking for someone to take care of your small business website? Need a developer for a scalable app?
                            <br></br> 
                            Get in touch with me 🙂
                            <a href="mailto:kohnenbrian@gmail.com" rel='noopener noreferrer' className='phNum'>kohnenbrian@gmail.com</a>
                        </p>
                    </div>
                </div>

                <div className='contactButtons'>
                        <a href="mailto:kohnenbrian@gmail.com" rel='noopener noreferrer' className="fa fa-envelope faObs" title="e-mail" alt='email'> </a>
                        <a href="https://github.com/briankohnen" target="_blank" rel='noopener noreferrer' className="fa fa-github faObs" title="github" alt='github'> </a>
                        <a href="https://www.linkedin.com/in/brian-kohnen-b05025187/" target="_blank" rel='noopener noreferrer' className="fa fa-linkedin faObs" title="linkedIn" alt='linkedin'> </a>
                </div>

            </section>
    );
    };

};

export default Contact;
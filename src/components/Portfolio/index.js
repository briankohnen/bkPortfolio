import React, { Component, useEffect } from 'react';
import './style.css';

class Portfolio extends Component {

    state = {
        activeView: 0,
        animate: 0
    };

    projects = [
        {
            content: 
            <div className={`projSpotlite`} id='bdn'>
                <div className='projHeader'>
                <img title='breakdown.' className='image' src='https://media1.giphy.com/media/RLG1P1nJGvSpK6MiWx/giphy.gif' alt='breakdown.'></img>
                    <p>break<br></br>down.</p>
                </div>

                <div className='projLower'>

                <ul className='projDesc'>
                    <li>A quick breakdown your favorite musicians' top songs/genres</li>
                    <li>Pulls data from Spotify and LastFM APIs</li>
                    <li>Practice using Chart.js for a simple graph</li>
                </ul>

                <div className='hoverlinks'>
                    <a href='https://breakdown-app.herokuapp.com/' target='_blank' rel='noopener noreferrer' title='deployed link' className='hoverLink fa fa-link'></a>
                    <a href='https://github.com/briankohnen/breakdown' target='_blank' rel='noopener noreferrer' title='github link' className='hoverLink fa fa-github-alt'></a>
                </div>

                </div>

            </div>
        },
        {
            content:
            <div className='projSpotlite' id='RDG'>
                <div className='projHeader'>
                <img title='Demo Gallery'className='image' src='https://media1.giphy.com/media/YvRF7iIrgnriDjColV/giphy.gif' alt='Demo Gallery'></img>
                    <p>Demo<br></br> Gallery</p>
                </div>

                <div className='projLower'>

                <ul className='projDesc'>
                    <li>A sleek photo gallery developed with React</li>
                    <li>Uses flex to display images in orderly and responsive layout</li>
                    <li>Practice using Intersection Observer API for subtle visual flair</li>
                </ul>

                <div className='hoverlinks'>
                    <a href='https://react-demo-gallery.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='hoverLink fa fa-link'></a>
                    <a href='https://react-demo-gallery.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='hoverLink fa fa-github-alt'></a>
                </div>

                </div>

            </div>
        },
        {
            content:
            <div className='projSpotlite' id='DreamLifer'>
                <div className='projHeader'>
                <img title='Dreamlifer' className='image' src='' alt='DreamLifer'></img>
                    <p>Dream<br></br>Lifer</p>
                </div>

                <div className='projLower'>

                <ul className='projDesc'>
                    <li>A personalized scheduling app to keep track of ones' goals</li>
                    <li>Basic user authentication with cookies/express</li>
                    <li>Developed with MongoDB, Express, React, and Node</li>
                </ul>

                <div className='hoverlinks'>
                    <a href='https://react-demo-gallery.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='hoverLink fa fa-link'></a>
                    <a href='https://github.com/SachaSkinner/DreamLifer' target='_blank' rel='noopener noreferrer' className='hoverLink fa fa-github-alt'></a>
                </div>

                </div>

            </div>
        }
    ];

    handleAnimStart = (oper) => {
        this.setState({animate: this.state.animate+=oper});

        const timer = setTimeout(() => {
            this.setState({activeView: this.state.activeView+=oper});
        }, 350);
        return () => clearTimeout(timer);

    };

    handleAnimEnd = () => {
        this.setState({animate: 0});
    };

    render() {
    return (

    <section id='portfolio' className='big3 portfolioWrapper' data='Portfolio'>

        {this.state.activeView > 0 ?
        <nav className='galnav navLeft fa fa-chevron-circle-left fa-4x' onClick={()=>this.handleAnimStart(-1)}></nav>
        :
        <></>
        }
        {this.state.activeView < 2 ?
        <nav className='galnav navRight fa fa-chevron-circle-right fa-4x' onClick={()=>this.handleAnimStart(1)}></nav>
        :
        <></>
        }

        <div className={`portfolioViewer`}>

            <div className={`contentHolder ${this.state.animate === 1 ? 'slideRight' : this.state.animate === -1 ? 'slideLeft' : ''}`} onAnimationEnd={this.handleAnimEnd}>

                {this.projects[this.state.activeView].content}

            </div>

                {/* <div className='projSpotlite' id='NewsScraper' onClick={this.toggleImage}>
                    <img title='NewsScraper' className='image' src='https://media.giphy.com/media/BSQ3FgP67SqlUP5ZIg/giphy.gif' alt='News Scraper'></img>
                    <div className='projDesc'>
                        <div className='projHeader'>
                        <p>News Scraper</p>
                        </div>
                        <p className='shortDesc'>A simple app that uses a web scraping tool to get information from the Chicago Sun Times and allows users to read/save/comment on them.
                        </p>
                        <ul>
                            <li>Basic website scraping with 'cheerio' npm package</li>
                            <li>Use of 'Handlebars' for front-end templating</li>
                            <li>Information stored with MongoDB</li>
                            <li><a href='https://github.com/briankohnen/mongoNewsScrape' target='_blank' rel='noopener noreferrer' className='hoverLink'>Github link</a></li>
                        </ul>
                    </div>
                </div>
                */}

        </div>

    </section>

    );
    }

};

export default Portfolio;
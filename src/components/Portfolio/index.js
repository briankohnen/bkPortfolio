import React, { Component } from 'react';
// import importScript from '../../util/importScript';
import Head from '../Head';
import './style.css';

class Portfolio extends Component {

    toggleImage = (event) => {
        event.currentTarget.querySelector('.image').classList.toggle('showImg');
    };


    render() {
    return (
    <div id='portfolio' className='portfolioWrapper big3' data='Portfolio'>
    <div className='spacer'></div>
    <p className='portHeader'>Projects</p>
    <div className='portfolio'>
        
        <div className='centerContainer' id='centerContainer'>
            <div className='projSpotlite p1' id='DreamLifer' onClick={this.toggleImage}>
                    <img title='Dreamlifer' className='image' src='https://user-images.githubusercontent.com/45444261/69471574-5a3d1800-0d66-11ea-9a75-d906e85f1532.gif' alt='Dream Lifer'></img>
                <div className='projDesc'>
                    <div className='projHeader'>
                        <p>DreamLifer</p>
                    </div>
                        <p className='shortDesc'>A personalized scheduling app to keep track of goals towards ones' dream life.
                        </p>
                    <ul>
                        <li>Created API for database communication</li>
                        <li>Basic user authentication with cookies/express</li>
                        <li>Password encryption</li>
                        <li>Google Firebase to store users' profile images</li>
                        <li>Start-to-finish developed through use of MERN <br></br> techologies with two other colleagues</li>
                        <li><a href='https://github.com/SachaSkinner/DreamLifer' target='_blank' rel='noopener noreferrer' className='hoverLink'>Github link</a></li>
                    </ul>
                </div>
            </div>
            <div className='projSpotlite p2' id='RDG' onClick={this.toggleImage}>
                <div className='projDesc'>
                    <div className='projHeader'>
                    <p>DemoGallery/Portfolio</p>
                    </div>
                    <p className='shortDesc'>A sleek photo gallery developed with React.js
                    </p>
                    <ul>
                        <li>Uses flex-box to display images in orderly fashion</li>
                        <li>I created my own 'lightbox' to focus an image</li>
                        <li>Nice and simple animations between "galleries" of photo collections</li>
                        <li><a href='https://react-demo-gallery.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='hoverLink'>Deployed link</a></li>
                    </ul>
                </div>
                <img title='Demo Gallery'className='image' src='https://media.giphy.com/media/YvRF7iIrgnriDjColV/giphy.gif' alt='Memory Game'></img>
            </div>
            <div className='projSpotlite p3' id='NewsScraper' onClick={this.toggleImage}>
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
            <div className='projSpotlite p4' id='Bamazon' onClick={this.toggleImage}>
                <div className='projDesc'>
                    <div className='projHeader'>
                    <p>Bamazon</p>
                    </div>
                    <p className='shortDesc'>A CLI App used to read/update information in a hypothetical store's database.
                    </p>
                    <ul>
                        <li>Three separate but interconnected functionalities</li>
                        <li>Utilizes mySQL to store information</li>
                        <li>Practice with using 'cli-table,' a powerful npm package for displaying tabular data in the command line</li>
                        <li><a href='https://github.com/briankohnen/bamazon' target='_blank' rel='noopener noreferrer' className='hoverLink'>Github link</a></li>
                    </ul>
                </div>
                <img title='bamazon' className='image' src='https://media.giphy.com/media/JRcR2U6n25EtLsre3D/giphy.gif' alt='Bamazon'></img>
            </div>
        </div>

    </div>
    </div>
    );
    }

};

export default Portfolio;
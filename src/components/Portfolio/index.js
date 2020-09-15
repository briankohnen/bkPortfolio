import React, { Component } from 'react';
// import importScript from '../../util/importScript';
import Head from '../Head';
import './style.css';

class Portfolio extends Component {

    render() {
    return (
    <div id='portfolio' className='portfolioWrapper big3' data='Portfolio'>
    <div className='spacer'></div>
    <p className='portHeader'>Projects</p>
    <div className='portfolio'>
        
        <div className='centerContainer' id='centerContainer'>
            <div className='projSpotlite p1' id='DreamLifer'>
                {/* <a href='https://github.com/SachaSkinner/DreamLifer' target='_blank' rel='noopener noreferrer'>
                    <img className='image' src={DL} alt='Dream Lifer'></img>
                </a> */}
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
            <div className='projSpotlite p2' id='NewsScraper'>
            {/* <a href='https://github.com/briankohnen/mongoNewsScrape' target='_blank' rel='noopener noreferrer'>
                <img className='image' src={NS} alt='News Scraper'></img>
            </a> */}
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
            <div className='projSpotlite p3' id='Bamazon'>
            {/* <a href='https://github.com/briankohnen/bamazon' target='_blank' rel='noopener noreferrer'>
                <img className='image' src='' alt='Bamazon'></img>
            </a> */}
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
            </div>
            <div className='projSpotlite p4' id='RMG'>
                {/* <img className='image' src='' alt='Memory Game'></img> */}
                <div className='projDesc'>
                    <div className='projHeader'>
                    <p>React Memory Game</p>
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
            </div>
            <div className='projSpotlite p5' id='VGT'>
                {/* <img className='image' src={NS} alt='Trivia Game'></img> */}
                <div className='projDesc'>
                    <div className='projHeader'>
                    <p>Video Game Trivia</p>
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
            </div>
        </div>

        {/* {this.state.active ?
        (
        <> <ContactModal /> </>
        ) : (
        <> </>    
        )
        } */}

    </div>
    </div>
    );
    }

};

export default Portfolio;
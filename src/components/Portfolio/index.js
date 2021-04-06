import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    return (
        <section className='portfolio'>

            <div className='spotlite'>

            <div>
                <a href='https://test-galler.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                    <img title='template' src='https://media0.giphy.com/media/qQcYHo6I14zB6N3O7H/giphy.gif' alt='Portfolio Template'></img>
                </a>

                <ul>
                    <li>React template for a photo/writing portfolio</li>
                    <li>Practice with creative layouts and react-transition-groups</li>
                    <li>Emphasized responsive design</li>
                </ul>

                <p>
                    <a href='https://test-galler.herokuapp.com/' target='_blank' rel='noopener noreferrer'>live link ↗</a>
                </p>

            </div>

            <h1>portfolio template</h1>

            </div>

            
            <div className='spotlite'>

            <div>
                <a href='https://funhouse2021.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                    <img title='myRoom.3d' src='https://i.giphy.com/media/OsECHdARJQ81PB1Mxf/source.gif' alt='3d in html and css'></img>
                </a>

                <ul>
                    <li>A personal project working with 3d in html and css</li>
                    <li>Only for use on desktop at the moment</li>
                    <li>Try it out! Use the sliders to rotate the scene</li>
                </ul>

                <p>
                    <a href='https://funhouse2021.herokuapp.com/' target='_blank' rel='noopener noreferrer'>live link ↗</a>
                    <a href='https://github.com/briankohnen/2021FunHouse' target='_blank' rel='noopener noreferrer'>github link ↗</a>
                </p>

            </div>

            <h1>myroom.3d</h1>
            
            </div>

            <div className='spotlite'>

            <div>
                <a href='https://breakdown-app.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                    <img title='breakdown' src='https://media1.giphy.com/media/RLG1P1nJGvSpK6MiWx/giphy.gif' alt='breakdown'></img>
                </a>

                <ul>
                    <li>A quick breakdown of your favorite musicians' top songs/genres</li>
                    <li>Reformats data from Spotify and LastFM APIs</li>
                    <li>Leverages Chart.js package for simple graphing</li>
                </ul>

                <p>
                    <a href='https://breakdown-app.herokuapp.com/' target='_blank' rel='noopener noreferrer'>live link ↗</a>
                    <a href='https://github.com/briankohnen/breakdown' target='_blank' rel='noopener noreferrer'>github link ↗</a>
                </p>

            </div>

            <h1>breakdown</h1>

            </div>

            <div className='spotlite'>

            <div>
                <a href='https://dreamlifer.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                    <img title='dreamlifer' src='https://media2.giphy.com/media/IlgHjVWxQMtdU53Veu/giphy.gif' alt='Dream Lifer'></img>
                </a>

                <ul>
                    <li>A personalized scheduling app to keep track of ones' goals</li>
                    <li>Basic user authentication with cookies/express</li>
                    <li>Developed with MongoDB, Express, React, and Node</li>
                </ul>

                <p>
                    <a href='https://dreamlifer.herokuapp.com/' target='_blank' rel='noopener noreferrer'>live link ↗</a>
                    <a href='https://github.com/SachaSkinner/DreamLifer' target='_blank' rel='noopener noreferrer'>github link ↗</a>
                </p>

            </div>

            <h1>dreamlifer</h1>

            </div>

        </section>
    );
};

export default Portfolio;
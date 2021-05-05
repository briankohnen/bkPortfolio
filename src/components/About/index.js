import './about.css';

const About = () => {
    return (
        <div className='about'>
            <h1>Hi, from Brian</h1>

            <section>
                <div>
                    <p>
                        I'm a freelance developer / designer.
                    </p>
                    <p>
                        I'm skilled in full-stack development but currently focused more on building creative and unique front-end projects.
                    </p>
                </div>

                <div>
                    <p>
                        Usually working with these technologies:
                    </p>
                    <ul>
                        <li><code>JavaScript</code></li>
                        <li><code>Express</code></li>
                        <li><code>React</code></li>
                        <li><code>Node.js</code></li>
                    </ul>
                </div>
            </section>

            <section>
                <a href='https://drive.google.com/file/d/11sO7DVSUt2nm8myQ7cz1llRYJ6wc1yOM/view?usp=sharing' target="_blank" rel='noopener noreferrer' alt='resume' className='resume'><div className='resumeButton'>view my resume</div></a>
            </section>
        </div>
    );
};

export default About;
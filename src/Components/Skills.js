import React from 'react';
import TechnologyCard from './TechnologyCard';

const Skills = () => {

    return(
        <div className='skills-container'>
        <h1>Technologies I work with</h1>

        <div className='skills-techcard-container'>
        <TechnologyCard title="HTML" img={'html-logo.png'}/>
        <TechnologyCard title="CSS" img={'css-logo.png'}/>
        <TechnologyCard title="Javascript" img={'Javascript-logo.png'}/>
        <TechnologyCard title="NodeJS" img={'nodejs-logo.png'}/>
        <TechnologyCard title="ReactJS" img={'logo192.png'}/>
        <TechnologyCard title="Jest" img={'jest-logo.png'}/>
        <TechnologyCard title="Python" img={'python-logo.png'}/>
        <TechnologyCard title="MongoDB" img={'mongodb-logo.png'}/>
        <TechnologyCard title="Heroku" img={'logo-square-heroku.png'}/>
        </div>
        </div>
    )
}

export default Skills;
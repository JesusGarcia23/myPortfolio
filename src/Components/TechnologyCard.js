import React from 'react';

const TechnologyCard = (props) => {
    return (
        <div className='techCard-container'>
        <h3>{props.title}</h3>
        <img alt='tech' src={props.img}></img>
        </div>
    )
}

export default TechnologyCard;
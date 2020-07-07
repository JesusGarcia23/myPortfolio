import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className='project-card' onClick={e => props.clickFunction(props.projectUri)}>
        <img src={props.projectImg} alt='project-img'></img>
        {props.projectTitle}
        </div>
    )
}

export default ProjectCard;
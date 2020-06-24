import React from 'react';

const ProjectCard = (props) => {
    console.log(props)
    return (
        <div onClick={e => props.clickFunction(props.projectUri)}>
        {props.projectTitle}
        </div>
    )
}

export default ProjectCard;
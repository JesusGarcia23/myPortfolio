import React from 'react';
import {Link} from 'react-router-dom';

const ProjectCard = (props) => {
    return (
        <Link to={`/Project/${props.projectTitle}`}>
        <div>
        Hello World
        </div>
        </Link>
    )
}

export default ProjectCard;
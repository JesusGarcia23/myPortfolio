import React from 'react';
import {Link} from 'react-router-dom';

const ProjectDetails = (props) => {


    console.log(props)
    
    return (
        <div>
        <div onClick={e => props.clickFunction(false)}>Close</div>
        <h1>Project Detail page</h1>
        <h2>{props.projectValues && props.projectValues.title}</h2>
        </div>
    )
}

export default ProjectDetails
import React from 'react';
import {Link} from 'react-router-dom';

const ProjectDetails = (props) => {


    console.log(props)
    
    return (
        <div className='projectdetail-container'>
        <div>
        <span onClick={e => props.clickFunction(false)}>Close</span>
        <h2>{props.projectValues && props.projectValues.title}</h2>
        </div>
        </div>
    )
}

export default ProjectDetails
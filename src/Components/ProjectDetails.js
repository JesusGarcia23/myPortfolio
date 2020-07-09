import React from 'react';
import {Link} from 'react-router-dom';

const ProjectDetails = (props) => {


    console.log(props)
    
    return (
        <div className='projectdetail-container'>
        <div className='projectdetail'>
        <span onClick={e => props.clickFunction(false)}>Close</span>
        <h2>{props.projectValues && props.projectValues.title}</h2>

        <div className='projectdetailImg-container'>
        <img alt='project-img' src={props.projectValues && props.projectValues.images[0]}></img>
        <img alt='project-img' src={props.projectValues && props.projectValues.images[1]}></img>
        </div>
        
        <p>{props.projectValues && props.projectValues.description}</p>
        <a href={props.projectValues && props.projectValues.url} target='_blank' rel='noopener noreferrer'>View Demo</a>
        </div>

        </div>
    )
}

export default ProjectDetails
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const Projects = (props) => {

    const [showProjectDetails, setShowProjectDetails] = useState(false);

    const [projectChosen, setProjectChosen] = useState({})
        
    const listOfProjects = {
        "walkingInDarkness": {
            "title": "Walking in Darkness",
            "description": "It's a game"
        },
        "codey": {
            "title": "Codey",
            "description": "Full-stack App"
        },
        "triShare": {
            "title": "TriShare",
            "description": "Full-stack App"
        }
    } 

    const closeProjectDetail = () => {
        setShowProjectDetails(false)
    }
    
    const openProjectDetails = (projectName) => {
        console.log(projectName)
        setProjectChosen(listOfProjects[projectName])
        console.log(listOfProjects[projectName])
        setShowProjectDetails(true)
    }

    return(
        <div className='projects-container'>
        <h1>Projects</h1>
        <div className='projectcards-container'>
        <ProjectCard clickFunction={openProjectDetails} projectTitle="Walking In Darkness" projectImg="" projectUrl="" projectUri="walkingInDarkness"/>
        <ProjectCard clickFunction={openProjectDetails} projectTitle="Codey" projectImg="" projectDescription="" projectUrl="" projectUri="codey"/>
        <ProjectCard clickFunction={openProjectDetails} projectTitle="TriShare" projectImg="" projectDescription="" projectUrl="" projectUri="triShare"/>
        </div>

        <div>Project Detail Container
        {showProjectDetails === true ? <ProjectDetails clickFunction={closeProjectDetail} projectValues={projectChosen}/> : null}
        </div>
        </div>
    )
}

export default Projects;
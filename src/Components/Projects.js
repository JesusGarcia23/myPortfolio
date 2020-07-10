import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

const Projects = (props) => {

    const [showProjectDetails, setShowProjectDetails] = useState(false);

    const [projectChosen, setProjectChosen] = useState({})
        
    const listOfProjects = {
        "walkingInDarkness": {
            "title": "Walking in Darkness",
            "description": "A JavaScript game created to further deepen my skills, where the player has to follow the objectives solving puzzles to make his way through the game.\n Technologies used: JavaScript, HTML, CSS.",
            "url": "https://jesusgarcia23.github.io/JesusGarcia23.github.io",
            "images": ["WalkingInDarkness1.png", "WalkingInDarkness2.png"]
        },
        "codey": {
            "title": "Codey",
            "description": "Full Stack application. Pair-programming app where users can chat and write Javascript code in real time. Technologies used: Express, Node.js, Handlebars, Javascript, Socket.io, Mongoose, MongoDB, Passport, Bootsrap, CSS",
            "url": "https://thecodey.herokuapp.com",
            "images": ["codey1.png", "codey2.png"]
        },
        "triShare": {
            "title": "TriShare",
            "description": "MERN Stack application. Trishare allows users to upload equirectangular images, share their experiences with 360 image viewer included to provide users an immersive experience while featuring a social media interface with likes, comments and notifications. \n Technologies used: JavaScript, Three.js, React.js, Express.js, Mongoose, Passport.js, Node.js, Socket.io, HTML, CSS, and Bootstrap.",
            "url": "https://trishare.herokuapp.com/",
            "images": ["Trishare1.png", "Trishare2.png"]
        }
    } 

    const closeProjectDetail = () => {
        setShowProjectDetails(false)
        props.openProjectDetail(false)
    }
    
    const openProjectDetails = (projectName) => {
        setProjectChosen(listOfProjects[projectName])
        setShowProjectDetails(true)
        props.openProjectDetail(true)
    }

    return(
        <div className='projects-container'>
        <h1>Projects</h1>
        <div className='projectcards-container'>
        <ProjectCard clickFunction={openProjectDetails} projectTitle="Walking In Darkness" projectImg="WalkingInDarkness.png" projectDescription="" projectUrl="" projectUri="walkingInDarkness" projectDetailImg="" projectDetailSecondImg=""/>
        <ProjectCard clickFunction={openProjectDetails} projectTitle="Codey" projectImg="Codey.png" projectDescription="" projectUrl="" projectUri="codey" projectDetailImg="" projectDetailSecondImg=""/>
        <ProjectCard clickFunction={openProjectDetails} projectTitle="TriShare" projectImg="Trishare.png" projectDescription=""
         projectUrl="" projectUri="triShare" projectDetailImg="" projectDetailSecondImg=""/>
        </div>

        <div>
        {showProjectDetails === true ? <ProjectDetails clickFunction={closeProjectDetail} projectValues={projectChosen}/> : null}
        </div>
        </div>
    )
}

export default Projects;
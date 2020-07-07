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
        <ProjectCard clickFunction={openProjectDetails} projectTitle="Walking In Darkness" projectImg="WalkingInDarkness.png" projectDescription="A JavaScript game created to further deepen my skills, where the player has to follow the objectives solving puzzles
        to make his way through the game. Tech.: JavaScript, HTML, CSS." projectUrl="https://jesusgarcia23.github.io/JesusGarcia23.github.io" projectUri="walkingInDarkness" projectDetailImg="" projectDetailSecondImg=""/>
        <ProjectCard clickFunction={openProjectDetails} projectTitle="Codey" projectImg="Codey.png" projectDescription="This project was created by Fabricio Policarpo and I. It features full CRUD, validation, multiple end communication, APIS, Data Management, Friend Request system and a simple Javascript compiler.
        Technologies used: Express, Node.js, Handlebars, Javascript, Socket.io, Mongoose, MongoDB, Passport, Bootsrap, CSS" projectUrl="https://thecodey.herokuapp.com" projectUri="codey" projectDetailImg="" projectDetailSecondImg=""/>
        <ProjectCard clickFunction={openProjectDetails} projectTitle="TriShare" projectImg="Trishare.png" projectDescription="Full Stack MERN CRUD application. Cross user communication via Socket.io. Trishare allows users to upload equirectangular images, share their experiences with 360 image viewer included to provide users an immersive experience while featuring a social media interface with likes, comments and notifications. Including. Tech.: JavaScript, Three.js, React.js, Express.js, Mongoose, Passport.js, Node.js, Socket.io, HTML, CSS, and Bootstrap."
         projectUrl="https://trishare.herokuapp.com/" projectUri="triShare" projectDetailImg="" projectDetailSecondImg=""/>
        </div>

        <div>
        {showProjectDetails === true ? <ProjectDetails clickFunction={closeProjectDetail} projectValues={projectChosen}/> : null}
        </div>
        </div>
    )
}

export default Projects;
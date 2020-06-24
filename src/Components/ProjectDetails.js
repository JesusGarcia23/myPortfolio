import React from 'react';

const ProjectDetails = (props) => {

    
    const listOfProjects = {
        "WalkingInDarkness": {
            "description": "It's a game"
        }
    }
    if(props.params !== "") {
        console.log(listOfProjects[props.match.params.projectName])
    }
    console.log(props)
    
    return (
        <div>Project Detail page</div>
    )
}

export default ProjectDetails
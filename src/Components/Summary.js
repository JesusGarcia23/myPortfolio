import React from 'react';

const Summary = (props) => {
    return (
        <div className={props.pageReady ? 'summary-container-deactivated' : 'summary-container'}>
        
        <div className='summary-header'>
        <p>My name is TEST</p>
        <img src="myPicture.jpg" alt='profile-pic'></img>
        </div>
        
        <div className= 'summary-text-container'>
        <div className='summary-text'>
        I'm a passionate full-stack web developer who loves technology in general,
        new challenges, learning new things, building software applications,
        solving problems, working in teams, making ideas happen. Always looking to improve my skills.
        </div>
        <p>"The function of good software is to make the complex appear to be simple."</p>
        <i>- Grady Booch</i>
        </div>

        </div>
    )
}

export default Summary;
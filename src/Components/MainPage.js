import React, { useState, useEffect } from 'react';
import Summary from './Summary';

const MainPage = (props) => {

    const [ pageLevel, setPageLevel ] = useState(2);
    const [ pageReady, setPageReady ] = useState(false);

    const [firstDot, setFirstDot] = useState(15);
    const [secondDot, setSecondDot] = useState(10);
    const [thirdDot, setThirdDot] = useState(10);

    useEffect(() => {
        setTimeout(() => {setPageReady(true)}, 1500);
    })

    const updatePageLevel = (event) => {
        if(pageReady) {
            if(event.deltaY < 0 && pageLevel < 2) {
                setPageLevel(pageLevel + 1)
                updateDot(pageLevel + 1)
            }else if(event.deltaY > 0 && pageLevel > 0){
                setPageLevel(pageLevel - 1)
                updateDot(pageLevel - 1)
            }
        }   
    }

    const updateDot =(value) => {
        switch(value){
            case 1:
                setFirstDot(10);
                setSecondDot(15);
                setThirdDot(10);
                break;
            case 0:
                setFirstDot(10);
                setSecondDot(10);
                setThirdDot(15);
                break;
            default: 
                setFirstDot(15);
                setSecondDot(10);
                setThirdDot(10);
                break;
        }

    }
    if(pageLevel === 2){
       
    }else if(pageLevel === 1) {
 
    }else if(pageLevel === 0) {

    }

    return(
        <div className='mainPage-container' onWheel={e => updatePageLevel(e)}>

        <div className='mainPage-leftside'>
        <div className='red-container'>
        <a href='https://www.linkedin.com/in/jesusgarciamarval/' target="_blank" rel='noopener noreferrer'><i class="fa fa-linkedin-square" style={{fontSize: 30}}></i></a>
        <a href='https://github.com/JesusGarcia23' target="_blank" rel='noopener noreferrer'><i class="fa fa-github" style={{fontSize: 30}}></i></a>
        </div>

        <div className='dotsContainer'>
        <div style={{color: (firstDot === 15 ? 'white' : 'gray'), fontSize: (firstDot === 15 ? 17 : 12)}}>About me</div>
        <div style={{borderRadius: 50, backgroundColor: (firstDot === 15 ? 'white' : 'gray'), width: firstDot, height: firstDot, margin: 9}}></div>
        
        <div style={{color: (secondDot === 15 ? 'white' : 'gray'), fontSize: (secondDot === 15 ? 17 : 12)}}>Skills</div>
        <div style={{borderRadius: 50, backgroundColor: (secondDot === 15 ? 'white' : 'gray'), width: secondDot, height: secondDot, margin: 9}}></div>
        
        <div style={{color: (thirdDot === 15 ? 'white' : 'gray'), fontSize: (thirdDot === 15 ? 17 : 12)}}>Projects</div>
        <div style={{borderRadius: 50, backgroundColor: (thirdDot === 15 ? 'white' : 'gray'), width: thirdDot, height: thirdDot, margin: 9}}></div>
        </div>
        </div>

        <div className='mainPage-sections'>
        {pageLevel === 2 && <Summary/>}
        {pageLevel === 1 && <div className='mainPage-summary'>Hello My Skills</div>}
        {pageLevel === 0 && <div className='mainPage-summary'>Hello My Projects</div>}
        </div>
        </div>
    )
}

export default MainPage;
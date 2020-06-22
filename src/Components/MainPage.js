import React, { useState, useEffect } from 'react';
import Summary from './Summary';
import Skills from './Skills';
import Projects from './Projects';

const MainPage = (props) => {

    const [ pageLevel, setPageLevel ] = useState(2);
    const [ pageReady, setPageReady ] = useState(false);

    const isSelected = {
        color: 'white',
        fontSize: '17'
    }

    const dotSelected = {
        backgroundColor: 'white',
        borderRadius: 50,
        width: 15,
        height: 15,
        margin: 9
    }

    const dotNotSelected = {
        backgroundColor: 'gray',
        borderRadius: 50,
        width: 10,
        height: 10,
        margin: 9
    }

    const isNotSelected = {
        color: 'gray',
        fontSize: '12'
    }

    const [firstDot, setFirstDot] = useState(15);
    const [secondDot, setSecondDot] = useState(10);
    const [thirdDot, setThirdDot] = useState(10);

    useEffect(() => {
        setTimeout(() => {setPageReady(true)}, 1500);
    })

    const goToSection = (event) => {
        event.preventDefault();
        switch(event.target.id){
            case "dot-2":
                setPageLevel(1)
                updateDot(1)
                break;
            case "dot-3":
                setPageLevel(0)
                updateDot(0)
                break;
            case "dot-1":
                setPageLevel(2)
                updateDot(2)
                break;
            default:
                return;
    }  
    }

    const updatePageLevel = (event, type, number) => {
        if(pageReady) {
            switch(type){
                case "scroll": 
                if(event.deltaY < 0 && pageLevel < 2) {
                    setPageLevel(pageLevel + 1)
                }else if(event.deltaY > 0 && pageLevel > 0){
                    setPageLevel(pageLevel - 1)
                }
                break;
                case "click":
                    setPageLevel(number)
                    break;
                default:
                    return;
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

    return(
        <div className='mainPage-container' onWheel={e => updatePageLevel(e, "scroll")}>

        <div className='mainPage-leftside'>
        <div className='red-container'>
        <a href='https://www.linkedin.com/in/jesusgarciamarval/' target="_blank" rel='noopener noreferrer'><i className="fa fa-linkedin-square" style={{fontSize: 30}}></i></a>
        <a href='https://github.com/JesusGarcia23' target="_blank" rel='noopener noreferrer'><i className="fa fa-github" style={{fontSize: 30}}></i></a>
        </div>

        <div className='dotsContainer'>

        <div className='dot-sub' onClick={e => updatePageLevel(e, "click", 2)}>
        <div style={pageLevel === 2 ? isSelected : isNotSelected}>About me</div>
        <div style={pageLevel === 2 ? dotSelected : dotNotSelected}></div>
        </div>

        <div className='dot-sub' onClick={e => updatePageLevel(e, "click", 1)}>
        <div style={pageLevel === 1 ? isSelected : isNotSelected}>Skills</div>
        <div style={pageLevel === 1 ? dotSelected : dotNotSelected}></div>
        </div>

        <div className='dot-sub' onClick={e => updatePageLevel(e, "click", 0)}>
        <div style={pageLevel === 0 ? isSelected : isNotSelected}>Projects</div>
        <div style={pageLevel === 0 ? dotSelected : dotNotSelected}></div>
        </div>

        </div>
        </div>

        <div className='mainPage-sections'>
        {pageLevel === 2 && <Summary/>}
        {pageLevel === 1 && <Skills/>}
        {pageLevel === 0 && <Projects/>}
        </div>
        </div>
    )
}

export default MainPage;
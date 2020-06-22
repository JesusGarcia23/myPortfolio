import React, { Component, useEffect, useState, useRef } from 'react';
import TravelSpace from '../Components/TravelSpace';
import WelcomeText from '../Components/WelcomeText';
// import Skills from './Skills';
// import Projects from './Projects';

const MainPage = (props) => {

    const [timeToTravel, setTimeToTravel] = useState(false)

    useEffect(() => {
        setTimeout(() => {setTimeToTravel(true)}, 5000);
    })

    if(timeToTravel) {
        return <TravelSpace/>
    }else{
        return <WelcomeText />
    }
}

export default MainPage
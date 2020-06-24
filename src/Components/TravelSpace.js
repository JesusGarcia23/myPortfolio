import React, { useState, useEffect } from "react";
import MainPage from '../Views/MainPage';

const TravelSpace = (props) => {

    const [dataLoaded, setDataLoaded] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {setDataLoaded(true)}, 3000);
    })

    if(dataLoaded) {
        return <MainPage/>
    }else{
    return (
        <div  className='starry-sky'>
            <div className='stars-backdrop'></div>
            <div className='stars'></div>
        </div>
    )
}
}

export default TravelSpace;
import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from '../../contexts/AppContext';
import BestFitCard from '../../Componenets/BestFit/BestFitCard'

import { Card } from 'antd';
import CloseFitCard from '../../Componenets/CloseFit/CloseFitCard';

const ResultPage = () => {
    const { details, dispatch } = useContext(AppContext)
    useEffect(() => {
        console.log(details)
    },[details])
    return(
        <>
            <div style={{display : "flex"}}>
            <CloseFitCard />
            <BestFitCard />
            <CloseFitCard />
            </div> 
        </>
    )
}

export default ResultPage;
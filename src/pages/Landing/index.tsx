import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../service/api';


import './styles.css';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('/connections').then(response => {
            const { total } = response.data

            setTotalConnections(total)
        })
    }, [])    

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="Logo proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img 
                    src={LandingImg} 
                    alt="Landing" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aula"/>
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} conexôes já realizadas <img src={purpleHeartIcon} alt="coração"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;
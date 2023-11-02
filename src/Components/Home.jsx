import React, { useContext, useEffect } from 'react'

import ourGoal from '../assets/target.svg'
import whoWeAre from '../assets/who-we-are.svg'
import liveclass from '../assets/live-class.svg'
import onetoone from '../assets/one-to-one.svg'
import hometutor from '../assets/home-tutor.svg'

import '../Styles/Home.css'
import axios from 'axios'
import { Context } from '../main'
const Home = () => {

    const {  setIsAuthenticated } = useContext(Context);

    const fetchHome = async () => {
        const { data } = await axios.get("http://localhost:5000/home", {
            withCredentials: true,
        });
        if (data.success === 'true') {
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }
    }
    fetchHome();

    return (
        <>
            <div className="home">
                <div className="teachme-home" id='teachme-home'>
                    <div className='teachme-home-text'>
                        <h1>Welcome to Teach Me</h1>
                        <p>A place where you choose your mentor for your Destiny</p>
                    </div>
                </div>

                <div className="our-goal" id='our-goal'>
                    <img src={ourGoal} alt="" />
                    <div className="text">
                        <h1>
                            Our Main Goal
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde pariatur ipsum ea id minima animi, quidem quo aut sequi fugit temporibus dolore? Explicabo quos dolorem quas amet tenetur exercitationem velit ad maiores excepturi odio, deleniti modi doloremque animi. At omnis incidunt molestias iure fugiat eos odit nihil? Rem, corrupti?
                        </p>
                    </div>
                </div>

                <div className="teachme-about" id='teachme-about'>
                    <div className="text">
                        <h1>
                            Who we are?
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde pariatur ipsum ea id minima animi, quidem quo aut sequi fugit temporibus dolore? Explicabo quos dolorem quas amet tenetur exercitationem velit ad maiores excepturi odio, deleniti modi doloremque animi. At omnis incidunt molestias iure fugiat eos odit nihil? Rem, corrupti?
                        </p>
                    </div>
                    <img src={whoWeAre} alt="" />
                </div>

                <div className="services" id='services'>
                    <h1>Our Services</h1>

                    <div className="cards">

                        <div className="service-card">
                            <img src={liveclass} alt="" />
                            <h3>Live Classes</h3>
                        </div>

                        <div className="service-card">
                            <img src={hometutor} alt="" />
                            <h3>Home Tutor</h3>
                        </div>

                        <div className="service-card">
                            <img src={onetoone} alt="" />
                            <h3>One on One Teaching</h3>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
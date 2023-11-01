import React from 'react'

import ourGoal from '../assets/target.svg'
import whoWeAre from '../assets/who-we-are.svg'
import liveclass from '../assets/live-class.svg'
import onetoone from '../assets/one-to-one.svg'
import hometutor from '../assets/home-tutor.svg'

import '../Styles/Home.css'
const Home = () => {
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, dolorum quam cum officia neque perspiciatis in odit magni laborum libero fugiat reprehenderit officiis facilis dolores nesciunt molestiae totam enim. Totam, tempora repellendus expedita fugiat assumenda modi at harum beatae! Deleniti animi voluptate totam sapiente earum reprehenderit, expedita officiis atque nulla asperiores, libero sunt provident repellat, commodi quaerat. Aliquam quasi cumque quod. Quidem consectetur veniam nam, saepe vel, itaque a libero ipsam tempore dolore labore, soluta quisquam sunt quam sed ipsum aliquid facere quo in? Nemo maxime molestias blanditiis similique explicabo debitis voluptates, quisquam, aliquid culpa animi, nesciunt delectus recusandae a?
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
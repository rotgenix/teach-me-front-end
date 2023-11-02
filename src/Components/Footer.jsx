import React from 'react'
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../Styles/Footer.css'
import contact from '../assets/contact.svg'

const Footer = () => {
    return (
        <>
            <footer id='footer' className='footer'>
                <h1>Contact & Join Us</h1>


                <div className="contact-form" id='contact'>
                    <div className="inputs">
                        <div className="form-input">
                            <label htmlFor='name'>Name</label>
                            <input
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                type='text'
                                name='name'
                                placeholder='Your Name'
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor='email'>Email</label>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type='email'
                                name='email'
                                placeholder='Your Email'
                            />
                        </div>

                        <div className="form-input">
                            <label htmlFor='message'>Email</label>
                            <textarea
                                id=""
                                rows="6"
                                cols="50"
                                name='message'
                                placeholder='Your Message' onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />

                        </div>

                    </div>


                    <div className="contact-image">
                        <img src={contact} alt="" />
                    </div>
                </div>


                <div className='social-container'>
                    <div className="socials">
                        <ul>
                            <li>
                                <Link>
                                    <BsInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <BsYoutube />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <BsFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <BsTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="subscribe">
                        <input type="email" placeholder='Your Email' />
                        <button>Subscribe</button>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
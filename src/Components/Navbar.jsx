import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import '../Styles/Navbar.css'
import { Context } from '../main';
import axios from 'axios';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
    const logoutbtn = {
        backgroundColor: ' rgb(213, 85, 85)',
        width: '80px',
        fontSize: '17px',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '3px',
        margin: '0 auto'
    }

    const [navDown, setNavDown] = useState(false);

    const navStyleInitial = {
        left: '0',
        top: '64px'
    }
    const navStyleFinal = {

        left: '0',
        top: '-370px'
    }


    const Navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    const logout = async () => {
        const { data } = await axios.get("http://localhost:5000/logout", {
            withCredentials: true,
        });

        if (data.success) {
            setIsAuthenticated(false);
            Navigate('/');
        }

    }

    return (
        <>
            <nav className='navbar'>
                <div className="nav-con">
                    <div className="left">
                        {/* <img src="" alt="" /> */}
                        <Link to='/'><h1>Teach ME</h1></Link>
                    </div>

                    <div className="right">
                        <ul>
                            <li >
                                <HashLink to='/#teachme-home'>Home</HashLink>
                            </li>
                            <li>
                                <HashLink to='/#teachme-about'>About</HashLink>
                            </li>
                            <li>
                                <HashLink to='/teachers'>Teachers</HashLink>
                            </li>
                            <li><HashLink to='/#contact'>Contact</HashLink></li>
                            <li>
                                {
                                    isAuthenticated ? <button style={logoutbtn} onClick={logout}>Logout</button> : <Link to='/join'>Join</Link>
                                }
                            </li>

                        </ul>
                    </div>

                    <div className="hamburger">
                        <button
                            onClick={() => {
                                setNavDown(!navDown)
                            }}>

                            {navDown ? <RxCross2 /> : <GiHamburgerMenu />}

                        </button>
                    </div>
                    <div className="nav" style={navDown ? navStyleInitial : navStyleFinal}>
                        <ul>
                            <li>
                                <HashLink to='/#teachme-home'><button className='res-btn'
                                    onClick={() => {
                                        setNavDown(false)
                                    }}>Home</button></HashLink>
                            </li>
                            <li>
                                <HashLink to='/#teachme-about'><button className='res-btn' onClick={() => {
                                    setNavDown(false)
                                }}>About</button></HashLink>
                            </li>
                            <li>
                                <HashLink to='/teachers'><button className='res-btn' onClick={() => {
                                    setNavDown(false)
                                }}>Teachers</button></HashLink>
                            </li>
                            <li><HashLink to='/#contact'><button className='res-btn' onClick={() => {
                                setNavDown(false)
                            }}>Contact</button ></HashLink></li>
                            <li>
                                {
                                    isAuthenticated ? <button style={logoutbtn} onClick={logout}>Logout</button> : <Link to='/join'><button className='res-btn' onClick={() => {
                                        setNavDown(false)
                                    }}>Join</button></Link>
                                }
                            </li>

                        </ul>
                    </div>


                </div>

            </nav>
        </>
    )
}

export default Navbar
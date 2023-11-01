import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import '../Styles/Navbar.css'

const Navbar = () => {
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
                            <li>
                                <HashLink to='/#teachme-home'>Home</HashLink>
                            </li>
                            <li>
                                <HashLink to='/#teachme-about'>About</HashLink>
                            </li>
                            <li>
                                <HashLink to='/teachers'>Teachers</HashLink>
                            </li>
                            <li><HashLink to='/#contact'>Contact</HashLink></li>
                            <li><Link to='/join'>Join</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
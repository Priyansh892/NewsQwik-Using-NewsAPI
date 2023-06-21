
import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import NewsQwik from '../images/NewsQwik.png';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#home">
                    <img src={NewsQwik} alt="newsqwik_logo" height="60px" />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={handleMenuToggle} data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item text-white mt-2">
                            STAY UPDATED WITH THE LATEST NEWS...
                        </li>
                        <li className="nav-item">
                                <button style={{backgroundColor:"blue"}}><a className="nav-link" href="#register">JOIN NOW</a></button>
                            </li>
                            <li className="nav-item">
                                <button style={{backgroundColor:"grey"}}><a className="nav-link" href="#login">SIGN IN</a></button>
                            </li>
                           
                            
                        </ul>

                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;






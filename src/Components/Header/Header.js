import React from 'react';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = ({ handleChangeStyleMode }) => {
    const modeRef = useRef(),
        navbarRef = useRef();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckedModebtn = () => {
        if (!isChecked) {
            modeRef.current.classList.add('dark__mode');
            setIsChecked(true);
        } else {
            modeRef.current.classList.remove('dark__mode');
            setIsChecked(false);
        }
    }

    const handleOpenNavbarList = () => {
        navbarRef.current.classList.toggle('burger__active');
    }

    const handleClosenavbarList = () => {
        navbarRef.current.classList.remove('burger__active');
    }

    return (
        <div className="header__inner">
            <div className="container p-0">
                <div className="header__navbar">
                    <nav className="navbar navbar-exband-lg" ref={navbarRef}>
                        <div className="container">
                            <a href='/' className="header__logo navbar-brand">
                                <img src="./images/logo.png" alt="Logo" />
                            </a>
                            <div className="header__navbar-emblem d-flex align-items-center order-md-3">
                                <img className='d-sm-block d-none' src="./images/img_01.png" alt="Frog Scott" />
                                <div
                                    ref={modeRef}
                                    className="mode ms-3"
                                    onClick={() => {
                                        handleCheckedModebtn();
                                        handleChangeStyleMode(isChecked);
                                    }}
                                >
                                    <div className="mode__control">
                                        <span className="btn__lable"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar__burger order-2 d-md-none d-flex" onClick={handleOpenNavbarList}>
                                <span className='burger__item'></span>
                                <span className='burger__item'></span>
                                <span className='burger__item'></span>
                                <span className='burger__item'></span>
                            </div>
                            <div className="header__navbar-items mx-auto d-md-block d-none">
                                <ul className="navbar-nav flex-row justify-content-center">
                                    <li className="nav-item">
                                        <NavLink to='/' className="nav-link" onClick={handleClosenavbarList}>Home</NavLink>
                                    </li>
                                    <li className="nav-item mx-5">
                                        <NavLink to='/AboutUS' className="nav-link" onClick={handleClosenavbarList}>About us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/ContactUs' className="nav-link" onClick={handleClosenavbarList}>Contact us</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        </div >
    )
}

export default Header;
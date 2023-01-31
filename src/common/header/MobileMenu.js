import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import Nav from './Nav';

const MobileMenu = ({MobileHandler}) => {

    return (
        <div className="mobilemenu-popup">
            <div className="mobilemenu-inner">
                <div className="mobilemenu-header">
                    <div className="mobile-nav-logo">
                        <Link to={process.env.PUBLIC_URL + "/"}>
                            <img className="light-mode" src={process.env.PUBLIC_URL + "/images/logo-2.svg"} alt="Site Logo" />
                            <img className="dark-mode" src={process.env.PUBLIC_URL + "/images/logo-2.svg"} alt="Site Logo" />
                        </Link>
                    </div>
                    <button className="mobile-menu-close" onClick={MobileHandler} ><FaTimes /></button>
                </div>
                <div className="mobilemenu-body">
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;
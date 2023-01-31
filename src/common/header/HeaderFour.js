import React from 'react';
import Logo from '../../elements/logo/Logo';
import Nav from '../../common/header/Nav';
import StickyHeader from './StickyHeader';
import { Link } from 'react-router-dom';
import SwitcherHeader from '../../elements/switcher/SwitcherHeader';
import MobileMenu from './MobileMenu';


const HeaderFour = () => {

    const sticky = StickyHeader(100);
    
    const MobileMenuHandler = () => {
        document.querySelector('.mobilemenu-popup').classList.toggle("show");
        document.querySelector('body').classList.toggle("mobilemenu-show");

        var elements = document.querySelectorAll('.mobilemenu-popup .menu-item-has-children > a');
    
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.axil-submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
    }

    return (
        <>
            <header className="header axil-header header-style-4">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                                <Logo limage="/images/logo-3.svg"
                                dimage="/images/logo-3.svg"
                                simage="/images/logo-3.svg"
                                />
                            </div>
                            <div className="header-main-nav">
                                <Nav />
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    <li className="header-btn">
                                        <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-white">Let's Talk</Link>
                                    </li>
                                    <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                        <button className="btn-wrap" onClick={MobileMenuHandler}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    <li className="my_switcher d-block d-lg-none">
                                        <SwitcherHeader />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu MobileHandler={MobileMenuHandler}/>
        </>
    )
}

export default HeaderFour;
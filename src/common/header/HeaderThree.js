import React, { useState } from 'react';
import Logo from '../../elements/logo/Logo';
import OffcanvasMenu from './OffcanvasMenu';
import StickyHeader from './StickyHeader';
import { FaFacebookF, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";
import SwitcherHeader from '../../elements/switcher/SwitcherHeader';


const HeaderThree = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const OffcanvasHandleClose = () => setShowOffcanvas(false);
    const OffcanvasHandleShow = () => setShowOffcanvas(true);

    const sticky = StickyHeader(100);

    return (
        <>
            <header className="header axil-header header-style-3">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                                <Logo limage="/images/logo.svg"
                                dimage="/images/logo-3.svg"
                                simage="/images/logo-2.svg"
                                />
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    <li className="header-social-link">
                                        <ul className="social-icon-list list-unstyled">
                                            <li><a href="https://facebook.com/"><FaFacebookF /></a></li>
                                            <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                            <li><a href="https://www.linkedin.com/"><FaLinkedin /></a></li>
                                            <li><a href="https://www.behance.net/"><FaBehance /></a></li>
                                        </ul>
                                    </li>

                                    <li className="sidemenu-btn">
                                        <button className="btn-wrap" onClick={OffcanvasHandleShow}>
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
            <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
        </>
    )
}

export default HeaderThree;
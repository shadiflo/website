import React, { useState } from 'react';
import Logo from '../../elements/logo/Logo';
import OffcanvasMenu from './OffcanvasMenu';
import StickyHeader from './StickyHeader';
import { FaDonate,  } from "react-icons/fa";
import SwitcherHeader from '../../elements/switcher/SwitcherHeader';
import {  SiFaceit  } from "react-icons/si";


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
                                <Logo limage="/images/cb3.png"
                                dimage="/images/cb3.png"
                                simage="/images/cb3.png"
                                />
                            </div>
                         
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    <li className="header-social-link">
                                        <ul className="social-icon-list list-unstyled">
                                            <li><a href="https://www.faceit.com/en/organizers/e9891e09-318b-4309-babd-f4c87c4fbbb5/ClanBase/donate"target="_blank" rel="noopener noreferrer"><FaDonate />Donate Points</a></li>
                                            <li><a href="https://www.faceit.com/en/inv/o24rI8V"target="_blank" rel="noopener noreferrer"><SiFaceit /> Join Clan </a></li>
                                         
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
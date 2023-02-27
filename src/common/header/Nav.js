import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    const [show, setShow] = useState(false);
    const { token } = document.cookie;
    if (token) setShow(true);
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to="/">
                        ClanBase <FaAngleDown />
                    </Link>
                    <ul className="axil-submenu">
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/faceithubs"}>
                                Faceit Hubs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={process.env.PUBLIC_URL + "/faceitvisuals"}
                            >
                                Faceit Extension
                            </Link>
                        </li>
                        {localStorage.getItem("auth-token") == "null" ? (
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/login"}>
                                    Login
                                </Link>
                            </li>
                        ) : (
                            ""
                        )}
                        {localStorage.getItem("auth-token") == "null" ? (
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/register"}>
                                    Signup
                                </Link>
                            </li>
                        ) : (
                            ""
                        )}
                    </ul>
                </li>
                <li>
                    <Link to={process.env.PUBLIC_URL + "/freeagents"}>
                        Free Agents
                    </Link>
                </li>

                <li className="menu-item-has-children">
                    <Link to="#">
                        Resources
                        <FaAngleDown />
                    </Link>
                    <ul className="axil-submenu">
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/placestoplay"}>
                                Places to play CS:GO
                            </Link>
                        </li>
                    </ul>
                </li>

                {/*  <li className="menu-item-has-children">
                   	 <Link to="#">Teams <FaAngleDown /></Link>
                     
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Two Column</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-grid-two"}>Three Column</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-grid-three"}>Four Column</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-width-one"}>Three Column Width</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-width-two"}>Four Column Width</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-details/plan-management"}>Portfolio Details</Link></li>
                    </ul>
                    
                </li>
                */}
                {/*  <li className="menu-item-has-children">
                    <Link to="#">Pages <FaAngleDown /></Link>
                   
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/our-office"}>Our Office</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/case-study"}>Case Study</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/case-details/whitehorse"}>Case Study Details</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/team"}>Team</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/team-details/jane-cooper"}>Team Details</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/our-clients"}>Our Clients</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/testimonials"}>Testimonial</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/pricing-table"}>Pricing Table</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/typography"}>Typography</Link></li>
                        
                        <li><Link to={process.env.PUBLIC_URL + "/coming-soon"}>Coming Soon</Link></li>
                    </ul>
                    
                </li> */}
                {/* <li className="menu-item-has-children">
                    <Link to="#">Blog <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                         <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blogs</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/blog-details/1"}>Standard Post</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/blog-details/2"}>Gallery Post</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/blog-details/3"}>Video Post</Link></li>
                         <li><Link to={process.env.PUBLIC_URL + "#"}>Audio Post</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Quote Post</Link></li> 
                    </ul>
                </li>
                */}

                <li>
                    <Link to={process.env.PUBLIC_URL + "/faceitvisuals"}>
                        FACEIT Extension
                    </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">
                        CS:GO Tutorials <FaAngleDown />
                    </Link>
                    <ul className="axil-submenu">
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/miragetips"}>
                                Mirage
                            </Link>
                        </li>
                    </ul>
                </li>
                {/*
                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            */}
            </ul>
        </nav>
    );
};

export default Nav;

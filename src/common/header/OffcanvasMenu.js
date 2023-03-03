import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";


const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
    const token = localStorage.getItem("token");

    return (
        <Offcanvas
            show={offcanvasShow}
            onHide={offcanvasHide}
            placement="end"
            className="header-offcanvasmenu"
        >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                <form action="#" className="side-nav-search-form">
                    
                </form>
                <div className="row ">
                    <div className="col-lg-5 col-xl-6">
                        <ul className="main-navigation list-unstyled">
                            {localStorage.getItem("auth-token") != "null" ? (
                                <li>
                                    <Link
                                        to={process.env.PUBLIC_URL + "/logout"}
                                    >
                                        Logout
                                    </Link>
                                </li>
                            ) : (
                                ""
                            )}
                            {localStorage.getItem("auth-token") != "null" ? (
                                <li>
                                    <Link
                                        to={process.env.PUBLIC_URL + "/updateprofile"}
                                    >
                                        Update Profile
                                    </Link>
                                </li>
                            ) : (
                                ""
                            )}
                            
                        </ul>
                    </div>
                    
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default OffcanvasMenu;

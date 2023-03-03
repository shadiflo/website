import React, { useEffect } from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderTwo from "../common/header/HeaderTwo";
import SEO from "../common/SEO";
import BannerTwo from "../component/banner/BannerTwo";
import { useGlobalContext } from "../component/context/GlobalContext";

const CreativeAgency = () => {
    const { showAlert, getRequests } = useGlobalContext();

    useEffect(() => {
        if (localStorage.getItem("login") === "true") {
            showAlert("login successful", "success");
            localStorage.setItem("login", "false");
        }
        if (localStorage.getItem("auth-token") !== "null") {
            getRequests();
        }
    }, []);

    return (
        <>
            <SEO title="Home" />
            <main className="main-wrapper">
                <HeaderTwo />
                <BannerTwo />
                <div className="section section-padding">
                    <div className="container">
                        <div className="row"></div>
                    </div>
                    <ul className="shape-group-7 list-unstyled">
                        <li className="shape shape-1">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/others/circle-2.png"
                                }
                                alt="circle"
                            />
                        </li>
                        <li className="shape shape-2">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/others/bubble-2.png"
                                }
                                alt="Line"
                            />
                        </li>
                        <li className="shape shape-3">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/others/bubble-1.png"
                                }
                                alt="Line"
                            />
                        </li>
                    </ul>
                </div>
                <FooterOne parentClass="" />
            </main>
        </>
    );
};

export default CreativeAgency;

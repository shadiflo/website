import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import { useParams } from "react-router-dom";
import "../assets/scss/alert/alert.scss";
const Profile = () => {
    const { id } = useParams();
    const [userp, setUserp] = useState();
    const getUser = async () => {
        const response = await fetch("http://localhost:5000/api/aboutuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                id,
            },
        });

        const data = await response.json();
        setUserp(data.user);
    };

    useEffect(() => {
        getUser();
    }, []);
    return (
        <>
            <SEO title="Profile" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne title="Profile" page="Profile" />

                <div className="section section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-6">
                                <div className="contact-form-box shadow-box mb--30">
                                    <h3 className="title text-center">
                                        User Profile
                                    </h3>
                                    {userp && (
                                        <div className="d-flex gap-3 justify-content-between">
                                            <div>
                                                <p>User name</p>
                                                <p>Country</p>
                                                <p>Teams Joined</p>
                                                <p>Twitter</p>
                                                <p>Faceit</p>
                                                <p>Hltv</p>
                                                <p>Status</p>
                                            </div>
                                            <div>
                                                <p className="color-primary">
                                                    {` ${userp.username}`}
                                                </p>
                                                <p className="color-primary">
                                                    {` ${userp.country.toUpperCase()}`}
                                                </p>
                                                <p>
                                                    {userp.teams_joined
                                                        .length !== 0 ? (
                                                        userp.teams_joined.map(
                                                            (team,i) => {
                                                                return (
                                                                    <span className="color-primary">
                                                                        {team}
                                                                        {userp.teams_joined.length !== i+1 ? <span> &nbsp;&nbsp; | &nbsp;&nbsp;</span>:""}
                                                                    </span>
                                                                );
                                                            }
                                                        )
                                                    ) : (
                                                        <span className="color-primary">
                                                            No teams Joined
                                                        </span>
                                                    )}
                                                </p>

                                                <p className="">
                                                    {userp.twitter ? (
                                                        <a
                                                            href={`${userp.twitter}`}
                                                            className="color-primary"
                                                        >
                                                            click here
                                                        </a>
                                                    ) : (
                                                        "No account"
                                                    )}
                                                </p>
                                                <p>
                                                    {userp.faceit ? (
                                                        <a
                                                            href={`${userp.faceit}`}
                                                            className="color-primary"
                                                        >
                                                            click here
                                                        </a>
                                                    ) : (
                                                        "No account"
                                                    )}
                                                </p>
                                                <p>
                                                    {userp.hltv ? (
                                                        <a
                                                            href={`${userp.hltv}`}
                                                            className="color-primary"
                                                        >
                                                            click here
                                                        </a>
                                                    ) : (
                                                        "No account"
                                                    )}
                                                </p>
                                                <p
                                                    className={`${
                                                        userp.status
                                                            ? "success"
                                                            : "danger"
                                                    } px-2`}
                                                >
                                                    {userp.status
                                                        ? " Active"
                                                        : " Inactive"}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="list-unstyled shape-group-12">
                        <li className="shape shape-1">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/others/bubble-2.png"
                                }
                                alt="Bubble"
                            />
                        </li>
                        <li className="shape shape-2">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/others/bubble-1.png"
                                }
                                alt="Bubble"
                            />
                        </li>
                        <li className="shape shape-3">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/others/circle-3.png"
                                }
                                alt="Circle"
                            />
                        </li>
                    </ul>
                </div>

                <FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
            </main>
        </>
    );
};

export default Profile;

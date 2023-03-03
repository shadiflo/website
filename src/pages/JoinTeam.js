import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import FormTwo from "../component/contact/FormTwo";
import { useGlobalContext } from "../component/context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

const JoinTeam = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {showAlert } = useGlobalContext();
    const [credentials, setCredentials] = useState({
        username: "",
        hltv: "",
        faceit: "",
        email: "",
    });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const joinTeam = async (e) => {
        e.preventDefault();

        const response = await fetch("https://clanbase.ovh/teams/jointeam", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
                id,
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();
        if (data.success) {
            setCredentials({
                username: "",
                hltv: "",
                faceit: "",
                email: "",
            });
            showAlert('request sent to admin','success');
        } else {
            showAlert(data.msg, "error");
        }
    };
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token == "null") {
            navigate("/login");
        }
    }, []);
    return (
        <>
            <SEO title="Join Team" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne title="Join Team" page="Join Team" />

                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="contact-form-box shadow-box mb--30">
                                    <h3 className="title">Join Team Now!</h3>
                                    <form
                                        onSubmit={joinTeam}
                                        method="post"
                                        className="axil-contact-form"
                                    >
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="username"
                                                required
                                                onChange={onChange}
                                                value={credentials.username}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                required
                                                onChange={onChange}
                                                value={credentials.email}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>HLTV</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                name="hltv"
                                                onChange={onChange}
                                                value={credentials.hltv}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>FACEIT</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                name="faceit"
                                                onChange={onChange}
                                                value={credentials.faceit}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="axil-btn btn-fill-primary btn-fluid btn-primary"
                                                name="submit-btn"
                                            >
                                                Join Now
                                            </button>
                                        </div>
                                    </form>
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

export default JoinTeam;

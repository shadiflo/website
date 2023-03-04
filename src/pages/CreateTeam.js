import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import { useGlobalContext } from "../component/context/GlobalContext";
import { useNavigate } from "react-router-dom";

const CreateTeam = () => {
    const navigate = useNavigate();
    const { showAlert } = useGlobalContext();
    const [team_name, setTeam_name] = useState("");
    const [team_address, setTeam_address] = useState("");
    const [discord, setDiscord] = useState("");
    const [team_manager_twitter, setTeam_manager_twitter] = useState("");
    const createTeam = async (e) => {
        e.preventDefault();
        const json = JSON.stringify({
            team_name,
            team_address,
            discord,
            team_manager_twitter,
        });
        console.log(json);
        const response = await fetch("http://localhost:5000/teams/createteam", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
            },
            body: json,
        });

        const data = await response.json();
        if (data.success) {
            showAlert("team created", "success");
            setTeam_name("");
            setTeam_address("");
            setDiscord("");
            setTeam_manager_twitter("");
        } else {
            console.log(data);
            showAlert(data.msg, "error");
        }
    };
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token === "null") {
            navigate("/login");
        }
    }, []);
    return (
        <>
            <SEO title="Create Team" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne title="Create Team" page="Create Team" />

                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="contact-form-box shadow-box mb--30">
                                    <h3 className="title">
                                        Welcome to Clanbase let's Create your
                                        Team!
                                    </h3>
                                    <form
                                        onSubmit={createTeam}
                                        method="post"
                                        className="axil-contact-form"
                                    >
                                        <div className="form-group">
                                            <label>Team Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="team_name"
                                                required
                                                value={team_name}
                                                onChange={(e) => {
                                                    setTeam_name(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Team address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="teamemail"
                                                required
                                                value={team_address}
                                                onChange={(e) => {
                                                    setTeam_address(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Discord</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                name="discord"
                                                value={discord}
                                                onChange={(e) => {
                                                    setDiscord(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Manager Twitter</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                name="twitter"
                                                value={team_manager_twitter}
                                                onChange={(e) => {
                                                    setTeam_manager_twitter(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="axil-btn btn-fill-primary btn-fluid btn-primary"
                                                name="submit-btn"
                                            >
                                                Create Team
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

export default CreateTeam;

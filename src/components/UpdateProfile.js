import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import FormTwo from "../component/contact/FormTwo";
import { Alert } from "bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../component/context/GlobalContext";

const UpdateProfile = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("auth-token");
    if (token === "null") {
        navigate("/login");
    }
    const { User, getLoggedInUser,showAlert } = useGlobalContext();
    const [credentials, SetCredentials] = useState({
        username: "",
        twitter: "",
        hltv: "",
        faceit: "",
        country: "",
        status: "In active",
    });

    const updateProfile = async (e) => {
        e.preventDefault();
        let selected = document.querySelector("#status");
        let value = selected.options[selected.selectedIndex].value;
        credentials.status = value;
        const response = await fetch(`https://clanbase.ovh/api/updateuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        if (data.success) {
            showAlert("account updated successfully",'success');
            navigate("/");
            SetCredentials({
                username: "",
                twitter: "",
                hltv: "",
                faceit: "",
                country: "",
                status: false,
            });
        }
    };

    const onChange = (e) => {
        SetCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        getLoggedInUser();
        if (localStorage.getItem("signup") == "true") {
            showAlert("signup successful and you are logged in", "success");
            localStorage.setItem("signup", "false");
        }
    }, []);
    return !User ? (
        ""
    ) : (
        <>
            <SEO title="Update Profile" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne title="Update Profile" page="Update Profile" />

                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-8">
                                <div className="contact-form-box shadow-box mb--30">
                                    <h3 className="title">Update Profile</h3>
                                    <form
                                        className="axil-contact-form"
                                        onSubmit={updateProfile}
                                        // method="post"
                                    >
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="username"
                                                value={credentials.username}
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Country</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="country"
                                                value={credentials.country}
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Twitter</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                name="twitter"
                                                onChange={onChange}
                                                value={credentials.twitter}
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
                                            <label>Status</label>
                                            <select
                                                id="status"
                                                className="form-control"
                                            >
                                                <option
                                                    value="active"
                                                    className="form-control"
                                                >
                                                    Active
                                                </option>
                                                <option
                                                    value="inactive"
                                                    className="form-control"
                                                >
                                                    In active
                                                </option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="axil-btn btn-fill-primary btn-fluid btn-primary"
                                                name="submit-btn"
                                            >
                                                Update Now
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

export default UpdateProfile;

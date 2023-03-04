import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import FormTwo from "../component/contact/FormTwo";
import { Alert } from "bootstrap";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../component/context/GlobalContext";
const Register = () => {
    const { User, setUser,showAlert } = useGlobalContext();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        country: "",
        cpassword: "",
    });
    const navigate = useNavigate();
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const registerUser = async (e) => {
        e.preventDefault();
        if (credentials.password !== credentials.cpassword) {
            showAlert("both passwords should match",'error');
            return;
        }
        const response = await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem("auth-token", data.token);
            localStorage.setItem("signup", 'true');
            setCredentials({
                username: "",
                password: "",
                country: "",
                cpassword: "",
            });
            setUser(data.user);
            navigate("/updateprofile");
        }else{
            showAlert(data.msg,'error');
            if (localStorage.getItem("signup") === "true") {
                showAlert("signup successful and you are logged in", "success");
                localStorage.setItem("signup", "false");
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token && token !== "null") {
            navigate("/");
        }
    }, []);

    return (
        <>
            <SEO title="ClanBase| Register" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne title="Register" page="Register" />

                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="contact-form-box shadow-box mb--30">
                                    <h3 className="title">Register now!</h3>
                                    <form
                                        className="axil-contact-form"
                                        onSubmit={registerUser}
                                        method="post"
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
                                            <label>Country</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="country"
                                                required
                                                onChange={onChange}
                                                value={credentials.country}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                required
                                                onChange={onChange}
                                                value={credentials.password}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="cpassword"
                                                required
                                                onChange={onChange}
                                                value={credentials.cpassword}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="axil-btn btn-fill-primary btn-fluid btn-primary"
                                                name="submit-btn"
                                            >
                                                Register Now
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

export default Register;

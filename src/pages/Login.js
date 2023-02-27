import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import FormTwo from "../component/contact/FormTwo";
import { useGlobalContext } from "../component/context/GlobalContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const { User, setUser } = useGlobalContext();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const loginUser = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();
        if (data.success) {
            alert("you have successfully logged in");
            localStorage.setItem("auth-token", data.token);
            setCredentials({
                username: "",
                password: "",
            });
            setUser(data.user);
            navigate("/");
        } else {
            alert(data.msg);
        }
    };
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token != "null") {
            navigate("/");
        }
    }, []);
    return (
        <>
            <SEO title="Blog Grid" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne title="Login" page="Login" />

                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="contact-form-box shadow-box mb--30">
                                    <h3 className="title">Login now!</h3>
                                    <form
                                        onSubmit={loginUser}
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
                                            <button
                                                type="submit"
                                                className="axil-btn btn-fill-primary btn-fluid btn-primary"
                                                name="submit-btn"
                                            >
                                                Login Now
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

export default Login;

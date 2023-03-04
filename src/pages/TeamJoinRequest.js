import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../component/context/GlobalContext";
const TeamJoinRequest = () => {
    const navigate = useNavigate();
    const { getRequests, showAlert, requests, setRequests } =
        useGlobalContext();
    const acceptRequest = async (id) => {
        console.log(id);

        const response = await fetch("http://localhost:5000/teams/requests", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
                id,
            },
        });

        const data = await response.json();
        if (data.success) {
            localStorage.setItem(
                "requests",
                JSON.parse(localStorage.getItem("requests")) - 1
            );
            showAlert("request accepted", "success");
            const newData = requests.filter((request) => request._id !== id);
            setRequests(newData);
        } else {
            showAlert(data.msg, "error");
        }
    };
    const deleteRequest = async (id) => {
        console.log(id);
        const response = await fetch("http://localhost:5000/teams/requests", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
                id,
            },
        });

        const data = await response.json();
        if (data.success) {
            localStorage.setItem(
                "requests",
                JSON.parse(localStorage.getItem("requests")) - 1
            );
            showAlert("request deleted", "success");
            const newData = requests.filter((request) => request._id !== id);
            setRequests(newData);
        } else {
            showAlert(data.msg, "error");
        }
    };
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token === "null") {
            navigate("/login");
        }
        getRequests();
    }, []);
    return (
        <>
            <SEO title="Requests" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne title="Team Join Requests" page="Requests" />

                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="contact-form-box shadow-box mb--30">
                                    <h3 className="title center">
                                        Accept Them to Get the Best Players!
                                    </h3>
                                    <table className="table mt-5">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="text-left"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-left"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-center"
                                                >
                                                    HLTV
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-center"
                                                >
                                                    FACEIT
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-center"
                                                >
                                                    Respond
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {!requests ? (
                                                <h2 className="center mt-4">
                                                    No Requests
                                                </h2>
                                            ) : (
                                                ""
                                            )}
                                            {requests &&
                                                requests.map((request) => {
                                                    return (
                                                        <tr>
                                                            <th
                                                                scope="col"
                                                                className="text-left"
                                                            >
                                                                {
                                                                    request.username
                                                                }
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="text-left"
                                                            >
                                                                {request.email}
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="text-center"
                                                            >
                                                                <a
                                                                    href={`${request.hltv}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Hltv
                                                                </a>
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="text-center"
                                                            >
                                                                <a
                                                                    href={`${request.faceit}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Faceit
                                                                </a>
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="text-center"
                                                            >
                                                                <button
                                                                    onClick={() => {
                                                                        acceptRequest(
                                                                            request._id
                                                                        );
                                                                    }}
                                                                    className="axil-btn px-4 py-2 m-lg-1 border-0 btn-fill-white btn-sm"
                                                                >
                                                                    Accept
                                                                </button>
                                                                <button
                                                                    onClick={() => {
                                                                        deleteRequest(
                                                                            request._id
                                                                        );
                                                                    }}
                                                                    className="axil-btn px-4 py-2  m-lg-1 border-0 btn-fill-white btn-sm"
                                                                >
                                                                    Reject
                                                                </button>
                                                            </th>
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </table>
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

export default TeamJoinRequest;

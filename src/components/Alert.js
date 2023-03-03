import React from "react";
import "../assets/scss/alert/alert.scss";
import { useGlobalContext } from "../component/context/GlobalContext";

const Alert = () => {
    const { hideAlert, msg_type, message } = useGlobalContext();
    return (
        <>
            <div className={`alert ${msg_type}`}>
                <p className="msg">
                    {" "}
                    {message
                        ? message
                        : ""}
                </p>
                <i className="uil uil-times" onClick={hideAlert}></i>
            </div>
        </>
    );
};

export default Alert;

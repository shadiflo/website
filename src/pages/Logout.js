import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    // const { token } = useParams();
    const logOut = async () => {
        const response = await fetch("http://localhost:5000/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
            },
        });

        const data = await response.json();
        if (data.success) {
            alert("you have signed out in");
            localStorage.setItem("auth-token", null);
            navigate("/login");
        }
    };
    useEffect(() => {
        logOut();
    }, []);

    return <div></div>;
};

export default Logout;

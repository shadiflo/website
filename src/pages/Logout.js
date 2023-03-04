import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../component/context/GlobalContext";

const Logout = () => {
    const navigate = useNavigate();
    const { showAlert } = useGlobalContext();
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
            showAlert("sign out successful", "success");
            localStorage.setItem("auth-token", null);
            localStorage.removeItem('requests');
            navigate("/login");
        }
    };
    useEffect(() => {
        logOut();
    }, []);

    return <div></div>;
};

export default Logout;

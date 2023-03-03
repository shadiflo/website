import React, { useContext, useState } from "react";
const AppContext = React.createContext();
const url = "https://clanbase.ovh/api";

const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [User, setUser] = useState();
    const [userprofile, setUserprofile] = useState();
    const [requests, setRequests] = useState();
    const loadList = async () => {
        const response = await fetch(
            `https://clanbase.ovh/api/admin/getallusers`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        if (data.success) {
            setUsers(data.users)
        } else {
            // todo
        }
    };

    const getLoggedInUser = async () => {
        const response = await fetch(`https://clanbase.ovh/api/getuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
            },
        });

        const data = await response.json();
        if (data.success) {
            setUser(data.user);
        } else {
            // todo
        }
    };
    const getUser = async (id) => {
        const response = await fetch("https://clanbase.ovh/api/aboutuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'auth-token':localStorage.getItem('auth-token'),
                id,
            },
        });

        const data = await response.json();
        if (data.success) {
            setUserprofile(data.user);
        } else {
            // showAlert(data.msg,'error');
        }
    };

    const loadTeams = async () => {
        const response = await fetch(`https://clanbase.ovh/teams/getallteams`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token"),
            },
        });

        const data = await response.json();
        if (data.success) {
            setTeams(data.teams);
        } else {
            // todo
        }
    };
    const [message, setMessage] = useState("");
    const [msg_type, setMsg_type] = useState("");
    const showAlert = async (msg, type) => {
        const Alert = document.querySelector(".alert");
        Alert.style.display = "block";
        setMessage(msg);
        setMsg_type(type);
        setTimeout(() => {
            Alert.style.display = "none";

            setMessage("");
            setMsg_type("");
        }, 2200);
    };
    const hideAlert = async (type, msg) => {
        const Alert = document.querySelector(".alert");
        Alert.style.display = "none";
        setMessage("");
        setMsg_type("");
    };
    const getRequests = async () => {
        const response = await fetch(
            "https://clanbase.ovh//teams/getallrequests",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                },
            }
        );

        const data = await response.json();
        if (data.success) {
            setRequests(data.requests);
            if(data.requests){
                localStorage.setItem('requests',data.requests.length);
            }
        } else {
            showAlert(data.msg, "error");
        }
    };
    return (
        <AppContext.Provider
            value={{
                loadList,
                users,
                User,
                setUser,
                loadTeams,
                getLoggedInUser,
                teams,
                setTeams,
                message,
                setMessage,
                msg_type,
                setMsg_type,
                hideAlert,
                showAlert,
                userprofile, setUserprofile,
                getUser,
                getRequests,
                setRequests,
                requests
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// Custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

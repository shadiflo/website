import React, { useContext, useState } from "react";
const AppContext = React.createContext();
const url = "http://localhost:5000/api";

const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [User, setUser] = useState();
    const loadList = async () => {
        const response = await fetch(
            `http://localhost:5000/api/admin/getallusers`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        setUsers(data.users);
        console.log(data.users);
    };

    const getLoggedInUser = async (token) => {
        const response = await fetch(`http://localhost:5000/api/getuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('auth-token'),
            },
        });
        const data = await response.json();
        setUser(data.user);
        console.log(data);
    };

    return (
        <AppContext.Provider
            value={{
                loadList,
                users,
                User,
                setUser,
                getLoggedInUser,
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

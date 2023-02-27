import React, { useState, useEffect } from "react";
import { useInsertionEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import Player from "./Player";

const player = {
    name: "saad",
    country: "pakistan",
};
const AboutTwo = () => {
    const { users, loadList } = useGlobalContext();
    useEffect(() => {
        loadList();
    }, []);

    return (
        <div className="mt-5">
            <div className="home"></div>
            <div className="container">
                <div className="active-player">
                    <h1 className="text-center">Free Agents</h1>
                </div>
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col" className="text-left">
                                Country
                            </th>
                            <th scope="col" className="text-left">
                                Player Name
                            </th>
                            <th scope="col" className="text-center">
                                HLTV
                            </th>
                            <th scope="col" className="text-center">
                                FACEIT
                            </th>
                            <th scope="col" className="text-center">
                                Twitter
                            </th>
                            <th scope="col" className="text-center">
                                Status
                            </th>
                        </tr>
                    </thead>
                    {users && users.length == 0 ? (
                        <tbody className="mt-5">
                            <th scope="col" className="text-left">
                                No Active Users
                            </th>
                        </tbody>
                    ) : (
                        users.map((player, i) => {
                            return (
                                <tbody key={i}>
                                    <th scope="col" className="text-left">
                                        {player.country.toUpperCase()}
                                    </th>
                                    <th scope="col" className="text-left">
                                        {player.username.toUpperCase()}
                                    </th>
                                    {player.hltv != "" ? (
                                        <th scope="col" className="text-center">
                                            <a
                                                href={player.hltv}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Hltv
                                            </a>
                                        </th>
                                    ) : (
                                        <th scope="col" className="text-center">
                                            NAN
                                        </th>
                                    )}
                                    {player.facit != "" ? (
                                        <th scope="col" className="text-center">
                                            <a
                                                href={player.faceit}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Faceit
                                            </a>
                                        </th>
                                    ) : (
                                        <th scope="col" className="text-center">
                                            NAN
                                        </th>
                                    )}
                                    {player.twitter != "" ? (
                                        <th scope="col" className="text-center">
                                            <a
                                                href={player.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Twitter
                                            </a>
                                        </th>
                                    ) : (
                                        <th scope="col" className="text-center">
                                            NAN
                                        </th>
                                    )}
                                    <th scope="col" className="text-center">
                                        <span>
                                            {player.status
                                                ? "Active"
                                                : "Inactive"}
                                        </span>
                                    </th>
                                </tbody>
                            );
                        })
                    )}
                </table>
            </div>
            <div className="container">
                <div className="active-player">
                    <h1 className="text-center">Teams LFP</h1>
                </div>
                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col" className="text-left">
                                Team Name
                            </th>
                            <th scope="col" className="text-center">
                                Team Address
                            </th>
                            <th scope="col" className="text-center">
                                Role Position
                            </th>
                            <th scope="col" className="text-center">
                                Team Manager Email
                            </th>
                            <th scope="col" className="text-center">
                                Team Manager Email
                            </th>

                            <th scope="col" className="text-right">
                                Application
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <th scope="col" className="text-left">
                            ClanBase
                        </th>
                        <th scope="col" className="text-center">
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                HLTV
                            </a>
                        </th>
                        <th scope="col" className="text-center">
                            <a
                                href="https://www.faceit.com/en/players/shadi"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                FACEIT
                            </a>
                        </th>
                        <th scope="col" className="text-center">
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>
                        </th>
                        <th scope="col" className="text-center">
                            <a
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Website
                            </a>
                        </th>

                        <th scope="col" className="text-right">
                            <Link
                                to={process.env.PUBLIC_URL + "/contact"}
                                className="axil-btn btn-small btn-fill-white"
                            >
                                Apply Now !
                            </Link>
                        </th>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AboutTwo;

import React, { useState, useEffect } from "react";
import { useInsertionEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import Player from "./Player";

const AboutTwo = () => {
    const { users, loadList, loadTeams, teams } = useGlobalContext();
    useEffect(() => {
        loadList();
        loadTeams();
    }, []);

    return (
        <div className="mt-5">
            <div className="home"></div>
            <div className="container">
                <div className="active-player">
                    <h1 className="text-center">Free Agents</h1>
                </div>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col" className="text-left">
                                Country
                            </th>
                            <th scope="col" className="text-left">
                                Name
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
                                status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="mt-5">
                        {users && users.length === 0 ? (
                            <td scope="col" className="text-center">
                                No Active Users
                            </td>
                        ) : (
                            users.map((player, i) => {
                                return (
                                    <tr key={i}>
                                        <td scope="col" className="text-left">
                                            {player.country.toUpperCase()}
                                        </td>
                                        <td scope="col" className="text-left">
                                            {
                                                <Link
                                                    to={`/profile/${player._id}`}
                                                    rel="noopener noreferrer"
                                                >
                                                    {player.username}
                                                </Link>
                                            }
                                        </td>
                                        {player.hltv !== "" ? (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                <Link
                                                    to={player.hltv}
                                                    rel="noopener noreferrer"
                                                >
                                                    Hltv
                                                </Link>
                                            </td>
                                        ) : (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                No account{" "}
                                            </td>
                                        )}
                                        {player.faceit !== "" ? (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                <Link
                                                    to={player.faceit}
                                                    rel="noopener noreferrer"
                                                >
                                                    Faceit
                                                </Link>
                                            </td>
                                        ) : (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                No account{" "}
                                            </td>
                                        )}
                                        {player.twitter !== "" ? (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                <Link
                                                    to={player.twitter}
                                                    rel="noopener noreferrer"
                                                >
                                                    Twitter
                                                </Link>
                                            </td>
                                        ) : (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                No account{" "}
                                            </td>
                                        )}
                                        <td scope="col" className="text-center">
                                            <span>
                                                {player.status
                                                    ? "Active"
                                                    : "Inactive"}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
            <div className="container">
                <div className="active-player">
                    <h1 className="text-center">Teams LFP</h1>
                </div>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col" className="text-left">
                                Team Name
                            </th>
                            <th scope="col" className="text-center">
                                Team Address
                            </th>
                            <th scope="col" className="text-center">
                                Admin
                            </th>
                            <th scope="col" className="text-center">
                                Discord
                            </th>
                            <th scope="col" className="text-center">
                                Team Manager Twitter
                            </th>

                            <th scope="col" className="text-right">
                                Application
                            </th>
                        </tr>
                    </thead>

                    {teams && teams.length === 0 ? (
                        <tbody className="mt-5 center">
                            <tr>
                                <th scope="col" className="text-left btn">
                                    <Link
                                        to={
                                            process.env.PUBLIC_URL +
                                            `/createteam`
                                        }
                                        className="axil-btn mt-2 btn-small btn-fill-white"
                                    >
                                        Create Team
                                    </Link>{" "}
                                </th>
                            </tr>
                        </tbody>
                    ) : (
                        teams.map((team, i) => {
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <td scope="col" className="text-left">
                                            {team.team_name.toUpperCase()}
                                        </td>
                                        {team.team_address !== "" ? (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                <a
                                                    href={`mailto:${team.team_address}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    email
                                                </a>
                                            </td>
                                        ) : (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                No account
                                            </td>
                                        )}
                                        <td scope="col" className="text-center">
                                            <Link
                                                to={`/profile/${team.admin_id}`}
                                                rel="noopener noreferrer"
                                            >
                                                {team.admin}
                                            </Link>
                                        </td>
                                        {team.discord !== "" ? (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                <Link
                                                    to={`/${team.discord}`}
                                                    rel="noopener noreferrer"
                                                >
                                                    discord
                                                </Link>
                                            </td>
                                        ) : (
                                            <td
                                                scope="col"
                                                className="text-center mt-2"
                                            >
                                                No account
                                            </td>
                                        )}
                                        {team.team_manager_email !== "" ? (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                <Link
                                                    to={
                                                        team.team_manager_twitter
                                                    }
                                                    rel="noopener noreferrer"
                                                >
                                                    Twitter
                                                </Link>
                                            </td>
                                        ) : (
                                            <td
                                                scope="col"
                                                className="text-center"
                                            >
                                                No account
                                            </td>
                                        )}
                                        <td scope="col" className="text-left">
                                            <Link
                                                to={
                                                    process.env.PUBLIC_URL +
                                                    `/jointeam/${team._id}`
                                                }
                                                className="axil-btn px-4 py-2  btn-small btn-fill-white"
                                            >
                                                Apply Now !
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })
                    )}
                </table>
            </div>
        </div>
    );
};

export default AboutTwo;

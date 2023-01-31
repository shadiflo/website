import React from 'react';
import {useParams} from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import TeamData from "../data/team/TeamData.json";
import { slugify } from '../utils';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaInstagram, FaVimeoV, FaDribbble, FaBehance } from "react-icons/fa";
import Tilty from 'react-tilty';

const allData = TeamData;


const TeamDetails = () => {

    const params = useParams();
    const teamSlug = params.slug;

    const getTeamData = allData.filter(data => slugify(data.title) === teamSlug);
    const detailsTeam = getTeamData[0];

    return (
        <>
        <SEO title="Team" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                 title={detailsTeam.title}
                 page="Team Details"

                />
                <div className="section-padding-equal team-details-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="team-details-content">
                            <h2 className="title">{detailsTeam.title}</h2>
                            <span className="subtitle" dangerouslySetInnerHTML={{__html: detailsTeam.designation}}></span>
                            <ul className="social-share list-unstyled">
                                <li><a href={detailsTeam.social.facebook}><FaFacebookF /></a></li>
                                <li><a href={detailsTeam.social.twitter}><FaTwitter /></a></li>
                                <li><a href={detailsTeam.social.pinterst}><FaPinterestP /></a></li>
                                <li><a href={detailsTeam.social.linkedin}><FaLinkedinIn /></a></li>
                                <li><a href={detailsTeam.social.instagram}><FaInstagram /></a></li>
                                <li><a href={detailsTeam.social.vimeo}><FaVimeoV /></a></li>
                                <li><a href={detailsTeam.social.dribble}><FaDribbble /></a></li>
                                <li><a href={detailsTeam.social.behance}><FaBehance /></a></li>
                            </ul> 
                            <p dangerouslySetInnerHTML={{__html: detailsTeam.description }}></p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team-details-thumb">
                            <Tilty perspective={3000} reset={false}>
                                <img className="paralax-image" src={process.env.PUBLIC_URL + detailsTeam.thumb} alt="Thumbnail" />
                            </Tilty>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default TeamDetails;
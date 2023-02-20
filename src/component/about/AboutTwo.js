import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';
import Table from 'react-bootstrap/Table';
import ReactCountryFlag from "react-country-flag"
import { Link } from 'react-router-dom';
const AboutTwo = () => {
    return (
        <div className="mt-5">
    <div className="home">
      
    </div>
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
          </tr>
        </thead>
        <tbody>
        <th scope="col" className="text-left">
        <ReactCountryFlag countryCode="ROMANIA" />
            </th>
        <th scope="col" className="text-left">
              FLVSH
            </th>
        <th scope="col" className="text-center">
        <a href="https://www.hltv.org/player/21515/flvsh#tab-infoBox" target="_blank" rel="noopener noreferrer">HLTV</a>
            </th>
        <th scope="col" className="text-center">
        <a href="https://www.faceit.com/en/players/shadi"target="_blank" rel="noopener noreferrer">FACEIT</a>
            </th>
            <th scope="col" className="text-center">
            <a href="https://twitter.com/flvshcsgo"target="_blank" rel="noopener noreferrer">Twitter</a>
            </th>
            
          
          </tbody>
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

            <th scope="col" className="text-right">Application</th>
          </tr>
        </thead>
        <tbody>
        <th scope="col" className="text-left">
              ClanBase
            </th>
        <th scope="col" className="text-center">
        <a href="" target="_blank" rel="noopener noreferrer">HLTV</a>
            </th>
        <th scope="col" className="text-center">
        <a href="https://www.faceit.com/en/players/shadi"target="_blank" rel="noopener noreferrer">FACEIT</a>
            </th>
            <th scope="col" className="text-center">
            <a href=""target="_blank" rel="noopener noreferrer">Twitter</a>
            </th>
            <th scope="col" className="text-center">
            <a href=""target="_blank" rel="noopener noreferrer">Website</a>
            </th>
            
            <th scope="col" className="text-right">
            <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-small btn-fill-white">
                            Apply Now !
                        </Link>
                        </th>
          </tbody>
      </table>
    </div>
  </div>
       
    )
}

export default AboutTwo;
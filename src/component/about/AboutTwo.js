import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';
import Table from 'react-bootstrap/Table';

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
              Player Name
            </th>
            <th scope="col" className="text-center">
              contact
            </th>
            <th scope="col" className="text-center">
              hltv
            </th>
            <th scope="col" className="text-center">
              twitter
            </th>
          </tr>
        </thead>
        <tbody>
        <th>shadi</th>
          
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
            <th scope="col" className="text-center">
              Team Name
            </th>
            <th scope="col" className="text-center">
              Team Address
            </th>
            <th scope="col" className="text-center">
              Team Manager Email
            </th>

            <th scope="col" className="text-center"></th>
            <th scope="col" className="text-center"></th>
          </tr>
        </thead>
        
      </table>
    </div>
  </div>
       
    )
}

export default AboutTwo;
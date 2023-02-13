import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const AboutTwo = () => {
    return (
        <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Players</span>
                                <h3 className="title">Free Agents</h3>
                                
                            </div>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaCompress /> Strategy</Accordion.Header>
                                    <Accordion.Body>
                                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaCode /> Design</Accordion.Header>
                                    <Accordion.Body>
                                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaGlobe /> Development</Accordion.Header>
                                    <Accordion.Body>
                                    Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
               
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;
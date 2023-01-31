import React from 'react';
import {Link, useParams} from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerTwo from '../elements/breadcrumb/BcrumbBannerTwo';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import { slugify } from '../utils';
import ProjectData from "../data/project/ProjectData.json";
import VideoOne from '../component/video/VideoOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';

const allProjectData = ProjectData;

const ProjectDetails = () => {

    const params = useParams();
    const projectSlug = params.slug;

    const getProjectData = allProjectData.filter(data => slugify(data.title) === projectSlug);
    const detailsProject = getProjectData[0];


    return (
        <>
        <SEO title="Project Details"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerTwo 
            title={detailsProject.title}
            paragraph ={detailsProject.excerpt}
            mainThumb={detailsProject.image}
            />
            <section className="section-padding single-portfolio-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">
                                    {detailsProject.category.map((cat, i) => (
                                            <span key={i}>{cat}</span> 
                                        )
                                    )}
                                </span>
                                <h3 className="title">{detailsProject.title}</h3>
                            </div>
                            {detailsProject.body.map((para, index) => (
                                <p key={index} dangerouslySetInnerHTML={{__html: para}}></p>
                            ))}
                            <Link to="#" className="axil-btn btn-fill-primary">Get it Now</Link>
                        </div>
                        <div className="col-lg-6 offset-xl-1">
                            <div className="why-choose-us">
                                <div className="section-heading heading-left">
                                    <h3 className="title">We delivered</h3>
                                    <p>Digital technology has made our world more transparent and interconnected, posing new challenges and opportunities for every business.</p>
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
            </section>
            <VideoOne />
            <CtaLayoutOne />
        <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ProjectDetails;
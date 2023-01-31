import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectPropTwo from './itemProp/ProjectPropTwo';
import ProjectData from "../../data/project/ProjectData.json";
import { Link } from 'react-router-dom';

const portfolioData = ProjectData;

const ProjectFour = () => {
    return (
        <div className="section section-padding-equal bg-color-dark">
            <div className="container">
            <SectionTitle 
                subtitle="Case study"
                title="Selected projects"
                description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue eget risus imperdiet."
                textAlignment="heading-light-left mb--90"
                textColor=""
            />
            <div className="project-add-banner">
                <div className="content">
                    <span className="subtitle">branding, design</span>
                    <h3 className="title">Godaddy- Online platform and website design</h3>
                    <div className="brand-logo">
                        <img src={process.env.PUBLIC_URL + "/images/project/godaddy.png"} alt="Godaddy" />
                    </div>
                </div>
                <div className="thumbnail">
                    <img src={process.env.PUBLIC_URL + "/images/project/mobile-mockup.png"} alt="Mockup" />
                </div>
            </div>

            <div className="row row-45">
                {portfolioData.slice(12, 16).map((data) => (
                    <div className="col-md-6" key={data.id}>
                        <ProjectPropTwo projectStyle="project-style-2" portfolio={data}/>
                    </div>
                ))}

            </div>
            <div className="more-project-btn">
                <Link to={process.env.PUBLIC_URL + "/project-grid-two"} className="axil-btn btn-fill-white">Discover More Projects</Link>
            </div>
        </div>
    </div>
    )
}

export default ProjectFour;
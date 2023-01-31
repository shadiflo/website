import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectPropTwo from './itemProp/ProjectPropTwo';
import ProjectData from "../../data/project/ProjectData.json";
import { Link } from 'react-router-dom';

const portfolioData = ProjectData;

const ProjectTwo = () => {
    return (
        <div className="section section-padding-equal bg-color-dark">
            <div className="container">
            <SectionTitle 
                subtitle="Case study"
                title="Selected projects"
                description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue eget risus imperdiet."
                textAlignment="heading-light-left"
                textColor=""
            />
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

export default ProjectTwo;
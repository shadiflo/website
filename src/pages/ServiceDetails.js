import React from 'react';
import {useParams} from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ProjectPropOne from '../component/project/itemProp/ProjectPropOne';
import { slugify } from '../utils';
import ServiceData from "../data/service/ServiceMain.json";
import ProjectData from "../data/project/ProjectData.json";
import ProcessOne from '../component/process/ProcessOne';
import AboutTwo from '../component/about/AboutTwo';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';

const allServiceData = ServiceData;
const getProjectData = ProjectData;

const ServiceDetails = () => {

    const params = useParams();
    const serviceSlug = params.slug;

    const getServiceData = allServiceData.filter(data => slugify(data.title) === serviceSlug);
    const detailsService = getServiceData[0];


    return (
        <>
        <SEO title="Service Details" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
            title={detailsService.title}
            paragraph ={detailsService.description}
            styleClass=""
            mainThumb="/images/banner/banner-thumb-4.png"
            />
            <AboutTwo />
           
            <ProcessOne />
            <div className="section section-padding">
                <div className="container">
                    <SectionTitle 
                        subtitle="Our Project"
                        title="Featured Designs"
                        description=""
                        textAlignment=""
                        textColor=""
                    />
                    <div className="row row-35">
                        {getProjectData.slice(0, 2).map((data) => (
                            <div className="col-md-6" key={data.id}>
                                <ProjectPropOne projectStyle="" portfolio={data}/>
                            </div>
                        ))}
                    </div>
                </div>
                <ul className="shape-group-16 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>
            </div>
            <CtaLayoutOne />
        <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ServiceDetails;
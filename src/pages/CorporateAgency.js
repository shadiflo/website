import React from 'react';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import FooterOne from '../common/footer/FooterOne';
import BlogOne from '../component/blog/BlogOne';
import BrandOne from '../component/brand/BrandOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import ProjectOne from '../component/project/ProjectOne';
import ServicePropOne from '../component/service/ServicePropOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import BannerFive from '../component/banner/BannerFive';
import HeaderFour from '../common/header/HeaderFour';

const CorporateAgency = () => {

    return (
        <>
        <SEO title="Corporate Agency"/>
        <ColorSwitcher />
        <main className="main-wrapper">
        <HeaderFour />
        <BannerFive />

        <div className="section section-padding">
            <div className="container">
            <SectionTitle 
                subtitle="What We Can Do For You"
                title="Services we can <br> help you with"
                description=""
                textAlignment="heading-left mb--20 mb_md--70"
                textColor=""
            />
                <div className="row">
                    <ServicePropOne colSize="col-lg-4" serviceStyle="service-style-2" itemShow="3" marginTop="yes"/>
                </div>
            </div>
            <ul className="shape-group-7 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
            </ul>

        </div>
        <ProjectOne parentClass="bg-color-light" />
        <TestimonialOne />
        <BrandOne />
        <BlogOne />
        <CtaLayoutOne />
        <FooterOne />
        </main>
        </>
    )
}

export default CorporateAgency;
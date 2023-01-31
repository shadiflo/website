import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ServicePropOne from '../component/service/ServicePropOne';
import AboutThree from '../component/about/AboutThree';
import CounterUpTwo from '../component/counterup/CounterUpTwo';


const ServiceTwo = () => {


    return (
        <>
        <SEO title="Service Two" />

        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Best solutions for your business"
                paragraph ="Give your business a unique logo to stand out from crowd. We’ll create logo specifically for your company.
                "
                styleClass=""
                mainThumb="/images/banner/banner-thumb-4.png"
            />
            <CounterUpTwo />
            <div className="section section-padding bg-color-light">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can <br> help you with"
                        description=""
                        textAlignment="heading-left"
                        textColor=""
                    />
                    <div className="row">
                        <ServicePropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" itemShow="6" marginTop="no" />
                    </div>
                </div>
            </div>

            <AboutThree />
            
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ServiceTwo;
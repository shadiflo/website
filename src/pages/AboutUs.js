import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ProcessOne from '../component/process/ProcessOne';
import AboutThree from '../component/about/AboutThree';
import AboutFour from '../component/about/AboutFour';
import AboutFive from '../component/about/AboutFive';


const AboutUs = () => {

    return (
        <>
        <SEO title="About us" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne 
                title="One of the fastest growing agency"
                paragraph ="We design and develop web and mobile applications for our clients worldwide."
                styleClass="thumbnail-4"
                mainThumb="/images/banner/banner-thumb-3.png"
                />
                <AboutFour />
                <AboutThree />
                <AboutFive />
                <ProcessOne />
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default AboutUs;
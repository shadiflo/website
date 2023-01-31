import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderTwo from '../common/header/HeaderTwo';
import SEO from '../common/SEO';
import BannerTwo from '../component/banner/BannerTwo';
import BlogOne from '../component/blog/BlogOne';
import BrandOne from '../component/brand/BrandOne';
import CounterUpOne from '../component/counterup/CounterUpOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';

import TestimonialOne from '../component/testimonial/TestimonialOne';

import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const CreativeAgency = () => {

    return (
        <>
        <SEO title="Home"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderTwo />
            <BannerTwo />
            <div className="section section-padding">
                <div className="container">
              
                    <div className="row">
                    </div>
                </div>
                <ul className="shape-group-7 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>

            </div>
         
          
          
           
            <BlogOne />
           
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default CreativeAgency;


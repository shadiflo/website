import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import SEO from '../common/SEO';
import BannerThree from '../component/banner/BannerThree';
import ProjectTwo from '../component/project/ProjectTwo';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BrandOne from '../component/brand/BrandOne';
import ProjectThree from '../component/project/ProjectThree';
import TestimonialTwo from '../component/testimonial/TestimonialTwo';
import FooterTwo from '../common/footer/FooterTwo';
import FormThree from '../component/contact/FormThree';

const PersonalPortfolio = () => {

    return (
        <>
        <SEO title="Personal Portfolio"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderThree />
            <BannerThree />
            <ProjectTwo />
            <ProjectThree />

            <BrandOne />
            <TestimonialTwo />

            <div className="section-padding bg-color-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-address mb--30">
                            <SectionTitle 
                                subtitle="Need a designer?"
                                title="Let’s work together"
                                description=""
                                textAlignment="heading-light-left"
                                textColor=""
                            />
                            <div className="address-list">
                                <div className="address">
                                <h6 className="title">Mail</h6>
                                <p>example@gmail.com</p>
                                </div>
                                <div className="address">
                                <h6 className="title">Address</h6>
                                <p>Warnwe Park Streetperrine, FL 33157 New York City</p>
                                </div>
                                <div className="address">
                                <h6 className="title">Phone</h6>
                                <p>+0123456789</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form-box mb--30">
                                <h3 className="title">Describe your project</h3>
                                <FormThree />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <FooterTwo />

        </main>
        </>
    )
}

export default PersonalPortfolio;


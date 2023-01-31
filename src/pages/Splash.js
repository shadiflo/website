import React from 'react';
import { Link } from 'react-router-dom';
import SplashFooter from '../common/footer/SplashFooter';
import SplashHeader from '../common/header/SplashHeader';
import SEO from '../common/SEO';
import SplashBanner from '../component/banner/SplashBanner';
import SplashCta from '../component/cta/SplashCta';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SplashData from '../data/splash/SplashData.json';
import { slugify } from '../utils';
import { FaAngleRight } from "react-icons/fa";

const DemoData = SplashData[0];
const FeatureData = SplashData[1];

const Splash = () => {

    return (
        <>
        <SEO title="Digital Creative Agency, Corporate and Portfolio React JS Template" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <SplashHeader />
                <SplashBanner />

                <div className="section main-demo-area bg-color-light" id="splash-demo">
                    <div className="container">
                        <div className="section-heading heading-left">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-7">
                                <h2 className="title">Our templates are just ready to use</h2>
                                </div>
                                <div className="col-xl-4 col-lg-5 offset-xl-2">
                                <p>You will love all of the features in our Template. 100% guaranteed satisfaction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                DemoData.map((data) => (
                                <div className="col-md-6" key={data.id}>
                                    <div className="single-demo">
                                        <Link to={`${process.env.PUBLIC_URL}/${slugify(data.title)}`}>
                                            <span className="thumb">
                                                <img src={`${process.env.PUBLIC_URL}${data.height_img}`} alt={data.title} />
                                            </span>
                                            <h4 className="title">{data.title}</h4>
                                        </Link>
                                        
                                    </div>
                                </div>
                                ))
                            }

                        </div>
                    </div>
                    <ul className="shape-group list-unstyled">
                        <li className="shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-35.png"} alt="Shape" /></li>
                        <li className="shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Shape" /></li>
                    </ul>
                </div>

                <div className="section section-padding bg-color-dark splash-features" id="splsh-features">
                    <div className="container">
                        <div className="section-heading heading-light-left">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                <h2 className="title">We have Impressive Features</h2>
                                </div>
                                <div className="col-lg-5 col-md-8">
                                <p>You will love all of the features in our template. 100% guaranteed satisfaction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                FeatureData.slice(0, 9).map((data) => (
                                    <div className="col-xl-4 col-md-6" key={data.id}>
                                        <div className="services-grid">
                                            <div className="thumbnail">
                                                <img src={process.env.PUBLIC_URL + data.icon} alt="icon" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h5>
                                                <p>{data.para}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <ul className="list-unstyled shape-group-10">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
                    </ul>
                </div>

                <div className="section section-padding bg-color-light spalsh-why-choose" id="splash-why-choose">
                    <div className="container">
                        <div className="section-heading heading-left">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-7">
                                    <h2 className="title">Why buy the template from us?</h2>
                                </div>
                                <div className="col-xl-4 col-lg-5 offset-xl-2">
                                    <p>Every template is built with such efforts that they are ready to meet all of our clients’ expectations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                FeatureData.slice(9, 12).map((data) => (
                                    <div className="col-xl-4 col-lg-6" key={data.id}>
                                        <div className="why-buy-box">
                                            <div className="heading">
                                                <div className="icon">
                                                    <img src={process.env.PUBLIC_URL + data.icon} alt="Thumb" />
                                                </div>
                                                <h5 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h5>
                                            </div>
                                            <p>{data.para}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-6">
                                <div className="support-box online-docuentation splash-hover-control">
                                    <a href="https://new.axilthemes.com/docs/abstrak-react/">
                                        <div className="inner">
                                            <div className="content">
                                                <div className="heading">
                                                <h4 className="title">Online<br /> Documentation</h4>
                                                <div className="icon">
                                                    <img src={process.env.PUBLIC_URL + "/images/icon/icon-25.png"} alt="Thumb" />
                                                </div>
                                                </div>
                                                <p>Well organized and up to date</p>
                                            </div>
                                            <div className="btn-area">
                                                <span className="item-btn"><FaAngleRight /></span>
                                            </div>
                                        </div>
                                        <ul className="shape-group list-unstyled">
                                            <li className="shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-34.png"} alt="Shape" /></li>
                                            <li className="shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-8.png"} alt="Shape" /></li>
                                        </ul>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="support-box support-ticket splash-hover-control">
                                    <a href="https://support.axilthemes.com/support/">
                                        <div className="inner">
                                        <div className="content">
                                            <div className="heading">
                                            <h4 className="title">Submit A <br /> Support Ticket</h4>
                                            <div className="icon">
                                                <img src={process.env.PUBLIC_URL + "/images/icon/icon-26.png"} alt="Thumb" />
                                            </div>
                                            </div>
                                            <p>We response within 1 Business day. weekends excluded.</p>
                                        </div>
                                        <div className="btn-area">
                                            <span className="item-btn"><FaAngleRight /></span>
                                        </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-shape">
                        <img src={process.env.PUBLIC_URL + "/images/others/line-6.png"} alt="Line" />
                    </div>
                </div>
                <SplashCta />
                <SplashFooter />
            </main>
        </>
    )
}

export default Splash;
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const BannerOne = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                                <h1 className="title">Build beautiful website &amp; mobile apps.</h1>
                                <span className="subtitle">Create live segments and target the right people for messages based on their behaviors.</span>
                                <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-fill-primary btn-large">Get Started</Link>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                <div className="large-thumb">
                                    <img src={process.env.PUBLIC_URL + "/images/banner/window.png"} alt="Laptop" />
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="slideInRight" duration={2} delay={300} animateOnce={true}>
                            <div className="large-thumb-2">
                                <img src={process.env.PUBLIC_URL + "/images/banner/laptop-poses.png"} alt="Laptop" />
                            </div>
                            </AnimationOnScroll>
                            <ul className="list-unstyled shape-group">
                                <li className="shape shape-1">
                                    <AnimationOnScroll animateIn="slideInLeft" duration={1} delay={800} animateOnce={true}>
                                        <img src={process.env.PUBLIC_URL + "/images/banner/chat-group.png"} alt="chat" />
                                    </AnimationOnScroll>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-21">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-38.png"} alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-4">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-6">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default BannerOne;
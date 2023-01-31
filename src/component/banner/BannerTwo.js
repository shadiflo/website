import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const BannerTwo = () => {
    return (
        <div className="banner banner-style-2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content">
                        <h1 className="title">Technology &amp; design studio</h1>
                            <Link to={process.env.PUBLIC_URL + "/project-grid-one"} className="axil-btn btn-fill-white btn-large">View Showcase</Link>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-18">
                <li className="shape shape-1">
                <AnimationOnScroll  animateIn="slideInRight" duration={1} animateOnce={true} delay={100}>
                    <img src={process.env.PUBLIC_URL + "/images/banner/banner-shape-1.png"} alt="Shape" />
                </AnimationOnScroll>
                </li>
                <li className="shape shape-2">
                <AnimationOnScroll  animateIn="slideInLeft" duration={1} animateOnce={true}>
                    <img src={process.env.PUBLIC_URL + "/images/banner/banner-shape-2.png"} alt="Shape" />
                </AnimationOnScroll>
                </li>
                <li className="shape shape-3">
                <AnimationOnScroll  animateIn="zoomIn" duration={1} animateOnce={true} delay={500}>
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Shape" />
                </AnimationOnScroll>
                </li>
                <li className="shape shape-4">
                <AnimationOnScroll  animateIn="zoomIn" duration={1} animateOnce={true} delay={500}>
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"} alt="Shape" />
                </AnimationOnScroll>
                </li>
                <li className="shape shape-5">
                <AnimationOnScroll  animateIn="zoomIn" duration={1} animateOnce={true} delay={500}>
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Shape" />
                </AnimationOnScroll>
                </li>
                <li className="shape shape-6">
                    <AnimationOnScroll  animateIn="zoomIn" duration={1} animateOnce={true} delay={500}>
                        <img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Shape" />
                    </AnimationOnScroll>
                </li>
                <li className="shape shape-7">
                    <AnimationOnScroll  animateIn="slideInDown" duration={1} animateOnce={true} delay={500}>
                        <img src={process.env.PUBLIC_URL + "/images/others/bubble-26.png"} alt="Shape" />
                    </AnimationOnScroll>
                </li>
            </ul>
        </div>
    )
}

export default BannerTwo;
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ErrorPage = () => {

    return (
        <>
        <SEO title="404 Not Found" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <div className="error-page onepage-screen-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                        <AnimationOnScroll  animateIn="slideInUp" duration={1} delay={300} animateOnce={true}>
                            <div className="content">
                                <h2 className="title">Page not found</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                                <Link to={process.env.PUBLIC_URL + "/"} className="axil-btn btn-fill-primary">Go Back</Link>
                            </div>
                        </AnimationOnScroll>
                        </div>
                        <div className="col-lg-6">
                        <AnimationOnScroll  animateIn="zoomIn" duration={1} delay={300} animateOnce={true}>
                            <div className="thumbnail">
                                <img src={process.env.PUBLIC_URL + "/images/others/404.png"} alt="404" />
                            </div>
                        </AnimationOnScroll>
                        </div>
                        </div>
                    </div>
                    <ul className="shape-group-8 list-unstyled">
                        <li className="shape shape-1">
                            <img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} alt="Bubble" />
                        </li>
                        <li className="shape shape-2">
                            <img src={process.env.PUBLIC_URL + "/images/others/bubble-27.png"} alt="Bubble" />
                        </li>
                        <li className="shape shape-3">
                            <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default ErrorPage;
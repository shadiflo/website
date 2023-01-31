import React from 'react';


const SplashCta = () => {
    return (
        <div className="section call-to-action-area splash-call-to-action">
            <div className="container">
                <div className="call-to-action">
                <div className="section-heading heading-light">
                    <h2 className="title">Let’s Start <br /> Your Business Today!</h2>
                    <p>Missing something? Just tell us what you need by <a href="https://support.axilthemes.com/support/">requesting us here.</a> </p>
                    <a target="_blank" rel="noopener noreferrer" href="https://themeforest.net/cart/configure_before_adding/37917149" className="axil-btn btn-fill-white">Buy Now</a>
                </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-9">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-12.png"} alt="Comments" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-13.png"} alt="Comments" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Comments" /></li>
                <li className="shape shape-5"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
                <li className="shape shape-6"><img src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"} alt="Comments" /></li>
                <li className="shape shape-7"><img src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></li>
            </ul>
        </div>
    )
}

export default SplashCta;
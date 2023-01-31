import React from 'react';
import Tilty from 'react-tilty';

const BcrumbBannerTwo = ({title, paragraph, mainThumb}) => {
    return (
        <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-heading heading-left">
                            <h1 className="title h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                            <p dangerouslySetInnerHTML={{__html: paragraph}}></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <Tilty perspective={2000} reset={false}>
                                <img src={process.env.PUBLIC_URL + mainThumb} alt="Illustration" />
                            </Tilty>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-20.png"} alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
                </li>
            </ul>
        </div>
    )
}

export default BcrumbBannerTwo;

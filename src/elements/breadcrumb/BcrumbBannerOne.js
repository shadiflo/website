import React from 'react';
import Tilty from 'react-tilty';

const BcrumbBannerOne = ({title, paragraph, styleClass, mainThumb}) => {
    return (
        <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div className="section-heading heading-left">
                    <h1 className="title h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                    <p dangerouslySetInnerHTML={{__html: paragraph}}></p>
                </div>
                <div className={`banner-thumbnail ${styleClass}`}>
                    <Tilty perspective={2000} reset={false}>
                      
                    </Tilty>
                </div>
            </div>
           
        </div>
    )
}

export default BcrumbBannerOne;
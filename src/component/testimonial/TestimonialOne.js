import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import TestimonialPropOne from './TestimonialPropOne';

const TestimonialOne = () => {
    return (
        <div className="section section-padding">
            <div className="container">
                <SectionTitle 
                    subtitle="Testimonial"
                    title="From getting started"
                    description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet."
                    textAlignment="heading-left"
                    textColor=""
                />
                <div className="row">
                    <TestimonialPropOne colSize="col-lg-4" itemShow="3"/>
                </div>
            </div>
            <ul className="shape-group-4 list-unstyled">
                <li className="shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default TestimonialOne;
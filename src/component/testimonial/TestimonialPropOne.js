import React from 'react';
import TestimonialData from "../../data/testimonial/TestimonialData.json";


const allData = TestimonialData;


const TestimonialItem = ({colSize, itemShow}) => {
    return (
        <>
            {allData.slice(0, itemShow).map((data, index) => (
                <div className={`${colSize}`} key={index}>
                    <div className="testimonial-grid">
                        <span className="social-media">
                            <img src={process.env.PUBLIC_URL + data.from} alt="Yelp" />
                        </span>
                        <p>{data.description}</p>
                        <div className="author-info">
                            <div className="thumb">
                                <img src={process.env.PUBLIC_URL + data.authorimg} alt="Google Review" />
                            </div>
                            <div className="content">
                                <span className="name">{data.authorname}</span>
                                <span className="designation">{data.authordesig}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TestimonialItem;
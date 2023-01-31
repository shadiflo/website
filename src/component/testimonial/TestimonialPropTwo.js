import React from 'react';


const TestimonialItem = ({colSize, itemShow, testimonialData, layoutStyle}) => {
    return (
        <>
            {testimonialData.slice(0, itemShow).map((data, index) => (
                <div className={`${colSize}`} key={index}>
                <div className={`testimonial-grid ${layoutStyle ? layoutStyle : ""}`}>
                    <span className="social-media">{data.fromtext}</span>
                    <p>{data.description}</p>
                    <div className="author-info">
                        <div className="thumb">
                            <img src={process.env.PUBLIC_URL + data.authorimg} alt={data.authorname} />
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
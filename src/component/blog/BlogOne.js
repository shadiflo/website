import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import BlogListOne from '../../component/blog/BlogListOne';


const BlogOne = () => {
    return (
        <div className="section section-padding-equal">
            <div className="container">
                <SectionTitle 
                    subtitle="What's Going On"
                    title="Latest stories"
                    description="News From Abstrak And Around The World Of Web Design And Complete Solution of Online Digital Marketing"
                    textAlignment=""
                    textColor=""
                />
                <div className="row g-0">
                    <BlogListOne colSize="col-xl-6" itemShow="2" />
                </div>
            </div>
            <ul className="shape-group-1 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-1.png"} alt="bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-2.png"} alt="bubble" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="bubble" /></li>
            </ul>
        </div>
    )
}

export default BlogOne;
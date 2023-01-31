import React from 'react';
import { Link } from 'react-router-dom';
import BlogData from "../../../data/blog/BlogData.json";


const allBlogData = BlogData;


const WidgetPost = () => {
    return (
        <div className="post-list-wrap">
        
        {allBlogData.slice(0, 3).map((data, index) => (
            <div className="single-post" key={index}>
                <div className="post-thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                        <img src={`${process.env.PUBLIC_URL}/${data.thumb}`} alt="Blog" />
                    </Link>
                </div>
                <div className="post-content">
                    <h6 className="title">
                    <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                        {data.title}
                    </Link>
                    </h6>
                    <ul className="blog-meta list-unstyled">
                        <li>{data.post_date}</li>
                        <li>{data.read_time}</li>
                    </ul>
                </div>
            </div>
        ))}
    </div>
    )
}

export default WidgetPost;



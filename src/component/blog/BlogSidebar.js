import React from 'react';
import { Link } from 'react-router-dom';
import WidgetPost from './widget/WidgetPost';
import WidgetCategory from './widget/WidgetCategory';
import { FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube} from "react-icons/fa";

const BlogSidebar = () => {
    return (
        <div className="axil-sidebar">
            <div className="widget widget-search">
                <h4 className="widget-title">Search</h4>
                <form action="#" className="blog-search">
                    <input type="text" placeholder="Search…" />
                    <button className="search-button"><FaSearch /></button>
                </form>
            </div>
            <div className="widget widget-categories">
                <h4 className="widget-title">Categories</h4>
                <WidgetCategory />
            </div>
            <div className="widget widge-social-share">
                <div className="blog-share">
                    <h5 className="title">Follow:</h5>
                    <ul className="social-list list-unstyled">
                        <li><a href="https://facebook.com/"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                        <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/"><FaLinkedinIn /></a></li>
                        <li><a href="https://www.pinterest.com/"><FaPinterest /></a></li>
                        <li><a href="https://www.youtube.com/"><FaYoutube /></a></li>
                    </ul>
                </div>
            </div>
            <div className="widget widget-recent-post">
                <h4 className="widget-title">Recent post</h4>
                <WidgetPost />
            </div>
            <div className="widget widget-banner-ad">
                <Link to="#">
                    <img src={process.env.PUBLIC_URL + "/images/banner/widget-banner.png"} alt="banner" />
                </Link>
            </div>
        </div>
    )
}

export default BlogSidebar;
import React from 'react';
import { useParams } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BlogGridTwo from '../component/blog/BlogGridTwo';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BlogData from "../data/blog/BlogData.json";
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import {slugify} from '../utils';


const allBlogData = BlogData;

const BlogCategory = () => {

    const params = useParams();
    const blogSlug = params.slug;

    const getBlogData = allBlogData.filter(blog => slugify(blog.category) === blogSlug);


    return (
        <>
        <SEO title="Category" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Category"
                page="Blog"
                />
                <div className="section-padding-equal">
                    <div className="container">
                        <div className="row">
                            <BlogGridTwo data={getBlogData} colSize="col-lg-4"/>
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
            <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default BlogCategory;
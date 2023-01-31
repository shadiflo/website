import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import BlogSidebar from '../component/blog/BlogSidebar';
import BlogGridOne from '../component/blog/BlogGridOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const BlogGridView = () => {

    return (
        <>
            <SEO title="Blog Grid" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Blogs"
                page="Blog"
                />
                <div className="section-padding-equal">
                    <div className="container">
                       <div className="row row-40">
                            <div className="col-lg-8">
                                <BlogGridOne />
                            </div>
                            <div className="col-lg-4">
                                <BlogSidebar />
                            </div>
                       </div>
                    </div>
                </div>
                <CtaLayoutOne />
            <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default BlogGridView;
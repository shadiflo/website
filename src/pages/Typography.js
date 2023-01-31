import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';

const Typography = () => {

    return (
        <>
        <SEO title="Typography" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Typography"
                page="Typography"
                />
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Titles</h2>
                                <div className="mb--80">
                                <h1>h1. Lorem Ipsum Dolor</h1>
                                <h2>h2. Lorem Ipsum Dolor</h2>
                                <h3>h3. Lorem Ipsum Dolor</h3>
                                <h4>h4. Lorem Ipsum Dolor</h4>
                                <h5>h5. Lorem Ipsum Dolor</h5>
                                <h6>h6. Lorem Ipsum Dolor</h6>
                                </div>
                                <h4>Body Font</h4>
                                <p className="body-font1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe illum unde suscipit dolorum libero sapiente distinctio quos a architecto enim iste expedita veritatis et consequatur maxime, ea nulla beatae.</p>
                                <p className="body-font2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe illum unde suscipit dolorum libero sapiente distinctio quos a architecto enim iste expedita veritatis et consequatur maxime, ea nulla beatae.</p>
                                <h4>Inline Elements</h4>
                                <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. <a href="https://axilthemes.com/">Aliquam tristique libero</a> at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, duis erat feugiat cras sociosqu porta ut praesent, fermentum donec convallis tellus vulputate duis nibh <a href="https://axilthemes.com/">rhoncus phasellus</a> dui massa nisl.</p>
                                <h4>Blockqoute</h4>
                                <blockquote className="wp-block-quote">
                                <p>“Nunc sed mattis diam. Suspendisse mi libero, sagittis nec varius quis, pulvinar eu nisl. Nulla in accumsan orci, a varius velit. Maecenas tincidunt mauris rutrum, eleifend sem at, sollicitudin ante.”</p>
                                </blockquote>
                                <h4>List Style</h4>
                                <div className="row">
                                <div className="col-md-4 col-sm-6 mb--30">
                                    <ul className="list-style">
                                    <li>Logo &amp; Branding</li>
                                    <li>Website Design</li>
                                    <li>Mobile app design</li>
                                    <li>Graphic/print design</li>
                                    <li>Video production</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-sm-6 mb--30">
                                    <ol className="list-style">
                                    <li>Logo &amp; Branding</li>
                                    <li>Website Design</li>
                                    <li>Mobile app design</li>
                                    <li>Graphic/print design</li>
                                    <li>Video production</li>
                                    </ol>
                                </div>
                                </div>
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

export default Typography;
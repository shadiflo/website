import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const TermsOfUse = () => {

    return (
        <>
            <SEO title="Terms Of Use" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Terms Of Use"
                page="Terms Of Use"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                <h4>Nam liber tempor cum soluta</h4>
                                <p>Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet libero rhoncus tempor. Fusce tempor quam libero, varius congue magna tempus vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean convallis ligula orci, ut congue nunc sodales ut. In ultrices elit malesuada velit ornare, eget dictum velit hendrerit. Praesent bibendum blandit lectus, eu congue neque mollis in. Pellentesque metus diam, hendrerit in purus fringilla, accumsan bibendum sapien. Nunc non facilisis sem.
                                </p>
                                <h4>About Abstrak</h4>
                                <p>In dapibus, nibh sit amet pulvinar convallis, massa nunc tincidunt nunc, a pretium risus nulla ut dui. Ut ut condimentum tellus, dapibus volutpat est. Integer ullamcorper iaculis blandit. Pellentesque id tempus urna. Quisque luctus cursus imperdiet. <a href="mailto:example@abstrak.com">example@abstrak.com</a> </p>
                                <h4>Nam liber tempor cum soluta</h4>
                                <p>Putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                                <h4>Nam liber tempor cum soluta</h4>
                                <p>Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                                <h4>Mirum est notare quam</h4>
                                <p>Littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
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

export default TermsOfUse;
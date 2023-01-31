import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SectionTitle from '../elements/section-title/SectionTitle';
import PricingOne from '../component/pricing/PricingOne';
import FaqOne from '../component/faq/FaqOne';


const PricingTable = () => {

    return (
        <>
        <SEO title="Pricing Table" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Pricing"
                page="Pricing"
                />
                <div className="section section-padding">
                    <div className="container">
                        <SectionTitle 
                            subtitle="Pricing Plan"
                            title="Find the Right Plan."
                            description="Flexible pricing options for freelancers <br> and design teams."
                            textAlignment="mb-0"
                            textColor=""
                        />
                        <PricingOne />
                    </div>
                    <ul className="shape-group-3 list-unstyled">
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="shape" /></li>
                    </ul>
                </div>
                <FaqOne />
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default PricingTable;
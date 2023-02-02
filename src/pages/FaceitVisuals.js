import React from 'react';
import HeaderThree from '../common/header/HeaderThree';
import SEO from '../common/SEO';
import BannerThree from '../component/banner/BannerThree';
import FooterTwo from '../common/footer/FooterTwo';


const PersonalPortfolio = () => {

    return (
        <>
        <SEO title="Faceit Visuals"/>
    
        <main className="main-wrapper">
            <HeaderThree />
            <BannerThree />
        

            <FooterTwo />

        </main>
        </>
    )
}

export default PersonalPortfolio;


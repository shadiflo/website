import React from 'react';
import SEO from '../common/SEO';
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import BannerVideos from '../component/banner/BannerVideos';


const FaceitHubs = () => {

    return (
        <>
        <SEO title="Mirage Tips"/>
     
        <main className="main-wrapper">
      
        <HeaderOne />
        <BannerVideos/>

            <FooterTwo />

        </main>
        </>
    )
}

export default FaceitHubs;


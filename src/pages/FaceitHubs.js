import React from 'react';
import SEO from '../common/SEO';
import HeaderHubs from '../common/header/HeaderHubs';
import BannerHubs from '../component/banner/BannerHubs';
import FooterTwo from '../common/footer/FooterTwo';


const FaceitHubs = () => {

    return (
        <>
        <SEO title="Faceit Hubs"/>
     
        <main className="main-wrapper">
      
            <HeaderHubs />
            <BannerHubs/>
        

            <FooterTwo />

        </main>
        </>
    )
}

export default FaceitHubs;


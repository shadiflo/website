import React from 'react';
import SEO from '../common/SEO';
import HeaderHubs from '../common/header/HeaderHubs';
import BannerHubs from '../component/banner/BannerHubs';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import FooterTwo from '../common/footer/FooterTwo';
import Nav from '../common/header/Nav';


const FaceitHubs = () => {

    return (
        <>
        <SEO title="Faceit Hubs"/>
        <ColorSwitcher />
        <main className="main-wrapper">
      
            <HeaderHubs />
            <BannerHubs/>
        

            <FooterTwo />

        </main>
        </>
    )
}

export default FaceitHubs;


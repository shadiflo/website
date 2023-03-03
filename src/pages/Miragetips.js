import React from 'react';
import SEO from '../common/SEO';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';


import BannerCustom from '../elements/breadcrumb/BannerCustom';
import Videos from '../component/about/Videos';

const FaceitHubs = () => {

    return (
        <>
        <SEO title="Mirage Tips"/>
     
        <main className="main-wrapper">
            <HeaderOne />
            <BannerCustom
           />
            <Videos   />
           
          
      
            
        <FooterOne />
        </main>
        </>
    )
}

export default FaceitHubs;


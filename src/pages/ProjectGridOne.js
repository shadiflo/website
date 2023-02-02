import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';

import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';

import TableList from './TableList'

const ProjectGridOne = () => {
    
   
    return (
        <>
        <SEO title="Connect" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <CtaLayoutOne />
         
          <TableList/>
           
            
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridOne;
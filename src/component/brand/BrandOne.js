import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import BrandItem from './BrandItem';


const BrandOne = () => {
    return (
        <div className="section section-padding-2 bg-color-dark">
        <div className="container">
            <SectionTitle 
                subtitle="Top Clients"
                title="We’ve built solutions for..."
                description="Design anything from simple icons to fully featured websites and applications."
                textAlignment="heading-light-left"
                textColor=""
            />
            <div className='row'>
               <BrandItem />
            </div>
        </div>
        <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
        </ul>
    </div>
    )
}

export default BrandOne;